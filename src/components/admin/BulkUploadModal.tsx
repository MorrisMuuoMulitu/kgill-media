import React, { useState, useRef } from 'react';
import {
    X,
    Upload,
    FileIcon,
    CheckCircle2,
    AlertCircle,
    Loader2,
    Trash2,
    Image as ImageIcon,
    Film,
    FileSpreadsheet,
    Download
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { parseMetadataCSV, downloadTemplate, CSVMetadata } from '../../lib/csvHelper';

interface BulkUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: () => void;
    type: 'portfolio' | 'movie';
}

interface UploadingFile {
    file: File;
    progress: number;
    status: 'pending' | 'uploading' | 'completed' | 'error';
    error?: string;
    publicUrl?: string;
    metadata?: Partial<CSVMetadata>;
}

const BulkUploadModal: React.FC<BulkUploadModalProps> = ({ isOpen, onClose, onComplete, type }) => {
    const [files, setFiles] = useState<UploadingFile[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [category, setCategory] = useState(type === 'portfolio' ? 'studio' : 'Feature Film');
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles: UploadingFile[] = Array.from(e.target.files).map(file => ({
                file,
                progress: 0,
                status: 'pending'
            }));
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            if (content) {
                const metadataList = parseMetadataCSV(content);
                setFiles(prev => {
                    return prev.map(f => {
                        const match = metadataList.find(m => m.filename === f.file.name);
                        if (match) {
                            return { ...f, metadata: match };
                        }
                        return f;
                    });
                });
            }
        };
        reader.readAsText(file);
    };

    const startUpload = async () => {
        if (files.length === 0) return;
        setIsUploading(true);

        const totalFiles = files.length;
        let completedFiles = 0;

        for (let i = 0; i < files.length; i++) {
            const currentFile = files[i];

            setFiles(prev => {
                const next = [...prev];
                next[i].status = 'uploading';
                return next;
            });

            try {
                // 1. Upload to Supabase Storage
                // Use the matching bucket name
                const bucketName = type === 'portfolio' ? 'portfolio' : 'movies';
                const fileExt = currentFile.file.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `${category}/${fileName}`;

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from(bucketName)
                    .upload(filePath, currentFile.file, {
                        cacheControl: '3600',
                        upsert: false
                    });

                if (uploadError) throw uploadError;

                // 2. Get Public URL
                const { data: { publicUrl } } = supabase.storage
                    .from(bucketName)
                    .getPublicUrl(filePath);

                // 3. Insert into Database
                if (type === 'portfolio') {
                    await supabase.from('portfolio_items').insert([{
                        title: currentFile.metadata?.title || currentFile.file.name.replace(/\.[^/.]+$/, ""),
                        category: currentFile.metadata?.category || category,
                        image: publicUrl,
                        type: (currentFile.metadata?.category || category).charAt(0).toUpperCase() + (currentFile.metadata?.category || category).slice(1),
                        year: currentFile.metadata?.year || new Date().getFullYear().toString(),
                        width: 1080,
                        height: 1350
                    }]);
                } else {
                    await supabase.from('movies').insert([{
                        title: currentFile.metadata?.title || currentFile.file.name.replace(/\.[^/.]+$/, ""),
                        description: currentFile.metadata?.description || 'Bulk uploaded production.',
                        category: currentFile.metadata?.category || category,
                        file_url: publicUrl,
                        duration: currentFile.metadata?.duration || '0h 0m',
                        thumbnail_url: '', // Should be set later
                        release_year: parseInt(currentFile.metadata?.release_year || currentFile.metadata?.year || new Date().getFullYear().toString()),
                        quality: currentFile.metadata?.quality || 'HD'
                    }]);
                }

                setFiles(prev => {
                    const next = [...prev];
                    next[i].status = 'completed';
                    next[i].publicUrl = publicUrl;
                    return next;
                });

                completedFiles++;
                setUploadProgress((completedFiles / totalFiles) * 100);

            } catch (error: any) {
                console.error('Upload error:', error);
                setFiles(prev => {
                    const next = [...prev];
                    next[i].status = 'error';
                    next[i].error = error.message;
                    return next;
                });
            }
        }

        setIsUploading(false);
        if (completedFiles === totalFiles) {
            setTimeout(() => {
                onComplete();
                onClose();
                setFiles([]);
            }, 1500);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-xl" onClick={() => !isUploading && onClose()}></div>

            <div className="relative w-full max-w-2xl bg-[#0f0f12] border border-white/10 rounded-[40px] p-8 shadow-2xl animate-scale-in flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-black text-white italic flex items-center gap-3">
                            BULK <span className="text-gold-gradient-start">UPLOAD</span>
                            {type === 'portfolio' ? <ImageIcon className="w-6 h-6" /> : <Film className="w-6 h-6" />}
                        </h2>
                        <p className="text-gray-500 text-sm font-inter">Select multiple files for automated processing.</p>
                    </div>
                    <button
                        onClick={onClose}
                        disabled={isUploading}
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-white transition-colors disabled:opacity-50"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
                    {/* Category Selection */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-xs font-black text-gray-500 uppercase ml-1">Upload Category</label>
                            <button
                                onClick={() => downloadTemplate(type)}
                                className="text-[10px] font-black text-gold-gradient-start hover:underline flex items-center gap-1"
                            >
                                <Download className="w-3 h-3" /> DOWNLOAD CSV TEMPLATE
                            </button>
                        </div>
                        {type === 'portfolio' ? (
                            <div className="flex gap-4">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter appearance-none"
                                >
                                    <option value="studio">Studio Session</option>
                                    <option value="wedding">Weddings</option>
                                    <option value="events">Events</option>
                                    <option value="corporate">Corporate</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="graduation">Graduation</option>
                                    <option value="headshots">Headshots</option>
                                    <option value="products">Products</option>
                                    <option value="real-estate">Real Estate</option>
                                    <option value="sports">Sports</option>
                                    <option value="africanism">African Culture</option>
                                </select>
                                <label className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center px-6 hover:bg-white/10 transition-all text-xs font-black text-white gap-2">
                                    <FileSpreadsheet className="w-5 h-5 text-gold-gradient-start" />
                                    IMPORT METADATA
                                    <input type="file" className="hidden" accept=".csv" onChange={handleCSVUpload} />
                                </label>
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter appearance-none"
                                >
                                    <option value="Feature Film">Feature Film</option>
                                    <option value="Documentary">Documentary</option>
                                    <option value="Short Film">Short Film</option>
                                    <option value="Series">Series</option>
                                </select>
                                <label className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center px-6 hover:bg-white/10 transition-all text-xs font-black text-white gap-2">
                                    <FileSpreadsheet className="w-5 h-5 text-gold-gradient-start" />
                                    IMPORT METADATA
                                    <input type="file" className="hidden" accept=".csv" onChange={handleCSVUpload} />
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Drop Zone */}
                    <div
                        onClick={() => !isUploading && fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-[32px] p-12 text-center transition-all cursor-pointer bg-white/[0.02] 
                            ${isUploading ? 'border-gray-800' : 'border-white/10 hover:border-gold-gradient-start/50 hover:bg-white/5'}`}
                    >
                        <input
                            type="file"
                            multiple
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            className="hidden"
                            accept={type === 'portfolio' ? 'image/*' : 'video/*'}
                        />
                        <Upload className={`w-12 h-12 mx-auto mb-4 ${isUploading ? 'text-gray-700' : 'text-gray-500'}`} />
                        <p className="text-white font-bold mb-1">Click to browse or drag {type === 'portfolio' ? 'images' : 'videos'} here</p>
                        <p className="text-gray-500 text-xs">Maximum file size: {type === 'portfolio' ? '10MB' : '2GB'}</p>
                    </div>

                    {/* File List */}
                    {files.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest flex justify-between">
                                <span>Queue ({files.length} files)</span>
                                {isUploading && <span>{Math.round(uploadProgress)}%</span>}
                            </h3>
                            <div className="space-y-2">
                                {files.map((f, i) => (
                                    <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group">
                                        <div className="flex items-center gap-4 flex-1 min-w-0">
                                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                                                {f.status === 'uploading' ? (
                                                    <Loader2 className="w-5 h-5 text-gold-gradient-start animate-spin" />
                                                ) : f.status === 'completed' ? (
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                                ) : f.status === 'error' ? (
                                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                                ) : (
                                                    <FileIcon className="w-5 h-5 text-gray-500" />
                                                )}
                                            </div>
                                            <div className="truncate pr-4">
                                                <p className="text-sm font-bold text-white truncate">
                                                    {f.metadata?.title || f.file.name}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-[10px] text-gray-500 font-bold">{(f.file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                                    {f.metadata && (
                                                        <span className="text-[8px] font-black bg-gold-gradient-start/10 text-gold-gradient-start px-1.5 py-0.5 rounded tracking-tighter uppercase">Metadata Matched</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {!isUploading && f.status === 'pending' && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                                                className="p-2 hover:bg-red-500/10 rounded-lg text-gray-500 hover:text-red-400 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="pt-8 border-t border-white/5 mt-8 flex flex-col gap-4">
                    {isUploading && (
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gold-gradient transition-all duration-300"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                    )}

                    <button
                        onClick={startUpload}
                        disabled={isUploading || files.length === 0}
                        className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-6 flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all uppercase tracking-widest disabled:opacity-50"
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="w-6 h-6 animate-spin" />
                                Processing Operations...
                            </>
                        ) : (
                            <>
                                <Upload className="w-6 h-6" />
                                Start Bulk Upload ({files.length})
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BulkUploadModal;
