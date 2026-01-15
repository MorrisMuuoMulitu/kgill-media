import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import {
    Plus,
    Search,
    Film,
    Edit2,
    Trash2,
    Star,
    ExternalLink,
    X,
    Loader2,
    Play,
    Calendar,
    Settings,
    Upload
} from 'lucide-react';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import BulkUploadModal from '../../components/admin/BulkUploadModal';

interface MovieItem {
    id: number;
    title: string;
    description: string;
    duration: string;
    file_url: string;
    thumbnail_url: string;
    category: string;
    release_year: number;
    featured: boolean;
    quality: string;
    views: number;
}

const MoviesManager = () => {
    const [movies, setMovies] = useState<MovieItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMovie, setEditingMovie] = useState<MovieItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; itemId: number | null; itemTitle: string }>({
        isOpen: false,
        itemId: null,
        itemTitle: ''
    });
    const [uploading, setUploading] = useState<{ field: string; status: boolean }>({ field: '', status: false });

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        file_url: '',
        thumbnail_url: '',
        category: 'Feature Film',
        duration: '',
        release_year: new Date().getFullYear(),
        quality: 'HD',
        featured: false
    });

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('movies')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setMovies(data);
        setLoading(false);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            release_year: parseInt(formData.release_year.toString())
        };

        if (editingMovie) {
            await supabase.from('movies').update(payload).eq('id', editingMovie.id);
        } else {
            await supabase.from('movies').insert([payload]);
        }

        setIsModalOpen(false);
        setEditingMovie(null);
        resetForm();
        fetchMovies();
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            file_url: '',
            thumbnail_url: '',
            category: 'Feature Film',
            duration: '',
            release_year: new Date().getFullYear(),
            quality: 'HD',
            featured: false
        });
    };

    const handleDelete = async (id: number) => {
        setLoading(true);
        await supabase.from('movies').delete().eq('id', id);
        await fetchMovies();
        setLoading(false);
    };

    const openDeleteConfirm = (movie: MovieItem) => {
        setDeleteConfirm({
            isOpen: true,
            itemId: movie.id,
            itemTitle: movie.title
        });
    };

    const openEdit = (movie: MovieItem) => {
        setEditingMovie(movie);
        setFormData({
            title: movie.title,
            description: movie.description,
            file_url: movie.file_url,
            thumbnail_url: movie.thumbnail_url,
            category: movie.category,
            duration: movie.duration,
            release_year: movie.release_year,
            quality: movie.quality,
            featured: movie.featured
        });
        setIsModalOpen(true);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'file_url' | 'thumbnail_url') => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading({ field, status: true });
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `uploads/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('movies')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('movies')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, [field]: publicUrl }));
        } catch (error: any) {
            console.error('Upload error:', error);
            alert('Upload failed: ' + error.message);
        } finally {
            setUploading({ field: '', status: false });
        }
    };

    const toggleFeatured = async (movie: MovieItem) => {
        await supabase.from('movies').update({ featured: !movie.featured }).eq('id', movie.id);
        fetchMovies();
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white italic">
                        MOVIES <span className="text-gold-gradient-start">MANAGER</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Manage feature films and cinematic productions with streaming support.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => setIsBulkModalOpen(true)}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-black px-6 py-4 rounded-2xl hover:bg-white/10 transition-all"
                    >
                        <Upload className="w-5 h-5" />
                        <span>BULK UPLOAD</span>
                    </button>
                    <button
                        onClick={() => {
                            setEditingMovie(null);
                            resetForm();
                            setIsModalOpen(true);
                        }}
                        className="flex items-center gap-2 bg-gold-gradient text-charcoal font-black px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all"
                    >
                        <Plus className="w-5 h-5" />
                        <span>ADD SINGLE MOVIE</span>
                    </button>
                </div>
            </div>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search movies by title or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0f0f12]/80 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading && movies.length === 0 ? (
                    <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p className="font-bold uppercase tracking-widest text-xs">Loading productions...</p>
                    </div>
                ) : filteredMovies.length === 0 ? (
                    <div className="col-span-full py-20 text-center bg-white/5 border border-dashed border-white/10 rounded-[40px]">
                        <Film className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest">No movies found</p>
                    </div>
                ) : (
                    filteredMovies.map((movie) => (
                        <div key={movie.id} className="group bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden hover:border-gold-gradient-start/30 transition-all duration-300 shadow-2xl">
                            <div className="aspect-video relative overflow-hidden bg-slate-900">
                                {movie.thumbnail_url ? (
                                    <img
                                        src={movie.thumbnail_url}
                                        alt={movie.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Film className="w-12 h-12 text-gray-800" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
                                        {movie.quality}
                                    </span>
                                    <span className="px-3 py-1 bg-gold-gradient-start/20 backdrop-blur-md rounded-lg text-[10px] font-black text-gold-gradient-start uppercase tracking-widest border border-gold-gradient-start/30">
                                        {movie.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/70 text-xs font-bold">
                                    <Play className="w-3 h-3 text-gold-gradient-start" />
                                    {movie.duration}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white line-clamp-1">{movie.title}</h3>
                                    <span className="text-xs font-black text-gray-500">{movie.release_year}</span>
                                </div>
                                <p className="text-sm text-gray-400 font-inter line-clamp-2 mb-6">
                                    {movie.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openEdit(movie)}
                                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => toggleFeatured(movie)}
                                            className={`p-3 rounded-xl transition-all ${movie.featured ? 'bg-gold-gradient/10 text-gold-gradient-start' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                                        >
                                            <Star className={`w-4 h-4 ${movie.featured ? 'fill-current' : ''}`} />
                                        </button>
                                        <button
                                            onClick={() => openDeleteConfirm(movie)}
                                            className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-xl text-red-400/70 hover:text-red-400 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <a
                                        href={movie.file_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gold-gradient/5 hover:bg-gold-gradient/10 rounded-xl text-gold-gradient-start transition-all"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Movie Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-2xl bg-[#0f0f12] border border-white/10 rounded-[40px] p-10 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-black text-white italic">
                                {editingMovie ? 'EDIT' : 'ADD'} <span className="text-gold-gradient-start">MOVIE</span>
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-white transition-colors">
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                                        placeholder="e.g. Beyond the Horizon"
                                    />
                                </div>

                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Description</label>
                                    <textarea
                                        required
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter resize-none"
                                        placeholder="Enter movie description..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter appearance-none"
                                    >
                                        <option value="Feature Film">Feature Film</option>
                                        <option value="Documentary">Documentary</option>
                                        <option value="Short Film">Short Film</option>
                                        <option value="Independent">Independent</option>
                                        <option value="Series">Series</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Quality</label>
                                    <select
                                        value={formData.quality}
                                        onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter appearance-none"
                                    >
                                        <option value="4K">4K Ultra HD</option>
                                        <option value="HD">1080p HD</option>
                                        <option value="720p">720p</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Duration (e.g. 1h 45m)</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                                        placeholder="1h 30m"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Release Year</label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.release_year}
                                        onChange={(e) => setFormData({ ...formData, release_year: parseInt(e.target.value) })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                                    />
                                </div>

                                <div className="col-span-full space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2">
                                            <Upload className="w-3 h-3" /> Movie File
                                        </label>
                                        <label className="cursor-pointer text-[10px] font-black text-gold-gradient-start hover:underline">
                                            {uploading.field === 'file_url' ? 'UPLOADING...' : 'UPLOAD TO STORAGE'}
                                            <input type="file" className="hidden" accept="video/*" onChange={(e) => handleFileUpload(e, 'file_url')} disabled={uploading.status} />
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={formData.file_url}
                                        onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                                        placeholder="https://... or upload above"
                                    />
                                    <p className="text-[10px] text-gray-500 italic mt-1 ml-1">Link to a video or upload one directly to Supabase.</p>
                                </div>

                                <div className="col-span-full space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2">
                                            <Settings className="w-3 h-3" /> Movie Thumbnail
                                        </label>
                                        <label className="cursor-pointer text-[10px] font-black text-gold-gradient-start hover:underline">
                                            {uploading.field === 'thumbnail_url' ? 'UPLOADING...' : 'UPLOAD TO STORAGE'}
                                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'thumbnail_url')} disabled={uploading.status} />
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={formData.thumbnail_url}
                                        onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                                        placeholder="https://ik.imagekit.io/... or upload above"
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={formData.featured}
                                                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                                className="sr-only"
                                            />
                                            <div className={`w-12 h-6 rounded-full transition-colors ${formData.featured ? 'bg-gold-gradient' : 'bg-slate-800'}`}></div>
                                            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.featured ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Feature on Home Page</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-6 mt-8 flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all uppercase tracking-widest"
                            >
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : editingMovie ? 'Update Movie Production' : 'Launch New Production'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirm.isOpen}
                title="Delete Movie Production?"
                message={`Are you sure you want to delete "${deleteConfirm.itemTitle}"? This will permanently remove the record and cannot be undone.`}
                confirmText="Permanently Delete"
                cancelText="Keep Movie"
                isDangerous={true}
                onConfirm={() => deleteConfirm.itemId && handleDelete(deleteConfirm.itemId)}
                onCancel={() => setDeleteConfirm({ isOpen: false, itemId: null, itemTitle: '' })}
            />
            {/* Bulk Upload Modal */}
            <BulkUploadModal
                isOpen={isBulkModalOpen}
                onClose={() => setIsBulkModalOpen(false)}
                onComplete={fetchMovies}
                type="movie"
            />
        </div>
    );
};

export default MoviesManager;
