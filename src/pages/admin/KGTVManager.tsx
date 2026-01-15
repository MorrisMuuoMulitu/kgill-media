import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import {
    Plus,
    Search,
    Video,
    Edit2,
    Trash2,
    Star,
    ExternalLink,
    X,
    Loader2,
    Youtube
} from 'lucide-react';
import YouTubeThumbnail from '../../components/YouTubeThumbnail';
import ConfirmDialog from '../../components/admin/ConfirmDialog';

interface VideoItem {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    duration: string;
    views: string;
    date: string;
    video_id: string;
    featured: boolean;
    year: string;
}

const KGTVManager = () => {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; itemId: number | null; itemTitle: string }>({
        isOpen: false,
        itemId: null,
        itemTitle: ''
    });

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Web Series',
        youtubeUrl: '',
        duration: '',
        year: new Date().getFullYear().toString(),
        featured: false
    });

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('youtube_videos')
            .select('*')
            .order('id', { ascending: false });

        if (data) setVideos(data);
        setLoading(false);
    };

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const videoId = getYoutubeId(formData.youtubeUrl) || formData.youtubeUrl;

        const payload = {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            video_id: videoId,
            thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            duration: formData.duration,
            year: formData.year,
            featured: formData.featured,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        if (editingVideo) {
            await supabase.from('youtube_videos').update(payload).eq('id', editingVideo.id);
        } else {
            await supabase.from('youtube_videos').insert([payload]);
        }

        setIsModalOpen(false);
        setEditingVideo(null);
        setFormData({
            title: '',
            description: '',
            category: 'Web Series',
            youtubeUrl: '',
            duration: '',
            year: new Date().getFullYear().toString(),
            featured: false
        });
        fetchVideos();
    };

    const handleDelete = async (id: number) => {
        setLoading(true);
        await supabase.from('youtube_videos').delete().eq('id', id);
        await fetchVideos();
        setLoading(false);
    };

    const openDeleteConfirm = (video: VideoItem) => {
        setDeleteConfirm({
            isOpen: true,
            itemId: video.id,
            itemTitle: video.title
        });
    };

    const toggleFeatured = async (video: VideoItem) => {
        await supabase.from('youtube_videos').update({ featured: !video.featured }).eq('id', video.id);
        fetchVideos();
    };

    const openEdit = (video: VideoItem) => {
        setEditingVideo(video);
        setFormData({
            title: video.title,
            description: video.description,
            category: video.category,
            youtubeUrl: `https://www.youtube.com/watch?v=${video.video_id}`,
            duration: video.duration,
            year: video.year,
            featured: video.featured
        });
        setIsModalOpen(true);
    };

    const filteredVideos = videos.filter(v =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white italic">
                        KG TV <span className="text-gold-gradient-start">MANAGER</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Host and manage your YouTube content here.</p>
                </div>
                <button
                    onClick={() => {
                        setEditingVideo(null);
                        setFormData({
                            title: '',
                            description: '',
                            category: 'Web Series',
                            youtubeUrl: '',
                            duration: '',
                            year: new Date().getFullYear().toString(),
                            featured: false
                        });
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-gold-gradient text-charcoal font-black px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all"
                >
                    <Plus className="w-5 h-5" />
                    <span>ADD NEW VIDEO</span>
                </button>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0f0f12]/80 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                    />
                </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p className="font-medium">Loading your content...</p>
                    </div>
                ) : filteredVideos.length === 0 ? (
                    <div className="col-span-full text-center py-20 bg-[#0f0f12]/50 border border-dashed border-white/10 rounded-3xl">
                        <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 font-medium">No videos found. Start by adding one!</p>
                    </div>
                ) : (
                    filteredVideos.map((video) => (
                        <div key={video.id} className="group relative bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl">
                            {/* Thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                                <YouTubeThumbnail
                                    videoId={video.video_id}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                                {/* Featured Badge */}
                                {video.featured && (
                                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-gold-gradient text-charcoal text-[10px] font-black px-2 py-1 rounded-md shadow-lg">
                                        <Star className="w-3 h-3 fill-current" />
                                        FEATURED
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md border border-white/10">
                                    {video.category}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-gold-gradient-start transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-inter line-clamp-2 mb-6">
                                    {video.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openEdit(video)}
                                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => toggleFeatured(video)}
                                            className={`p-3 rounded-xl transition-all ${video.featured ? 'bg-gold-gradient/10 text-gold-gradient-start' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                                        >
                                            <Star className={`w-4 h-4 ${video.featured ? 'fill-current' : ''}`} />
                                        </button>
                                        <button
                                            onClick={() => openDeleteConfirm(video)}
                                            className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-xl text-red-400/70 hover:text-red-400 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.video_id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white"
                                    >
                                        Watch <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#0a0a0c]/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>

                    <div className="relative w-full max-w-2xl bg-[#0f0f12] border border-white/10 rounded-[32px] p-8 shadow-2xl animate-scale-in">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-montserrat font-black text-white italic">
                                {editingVideo ? 'EDIT' : 'ADD'} <span className="text-gold-gradient-start">VIDEO</span>
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/5 rounded-full text-gray-400">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all cursor-pointer"
                                    >
                                        <option value="Web Series">Web Series</option>
                                        <option value="Short Film">Short Film</option>
                                        <option value="Podcast">Podcast</option>
                                        <option value="Behind the Scenes">Behind the Scenes</option>
                                        <option value="Introduction">Introduction</option>
                                    </select>
                                </div>

                                <div className="col-span-full space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1 flex items-center gap-2">
                                        <Youtube className="w-4 h-4 text-red-500" /> YouTube URL
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="https://www.youtube.com/watch?v=..."
                                        value={formData.youtubeUrl}
                                        onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                                    />
                                </div>

                                <div className="col-span-full space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Description</label>
                                    <textarea
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Duration (e.g., 14:15)</label>
                                    <input
                                        type="text"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Year</label>
                                    <input
                                        type="text"
                                        value={formData.year}
                                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={formData.featured}
                                                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                            />
                                            <div className="w-12 h-6 bg-white/10 rounded-full peer peer-checked:bg-gold-gradient transition-all"></div>
                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all shadow-lg"></div>
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Mark as Featured Content</span>
                                    </label>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-4 transition-all hover:shadow-2xl hover:shadow-gold-gradient-start/30 flex items-center justify-center gap-2"
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : editingVideo ? 'UPDATE VIDEO' : 'PUBLISH VIDEO'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirm.isOpen}
                title="Delete Video?"
                message={`Are you sure you want to delete "${deleteConfirm.itemTitle}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                isDangerous={true}
                onConfirm={() => deleteConfirm.itemId && handleDelete(deleteConfirm.itemId)}
                onCancel={() => setDeleteConfirm({ isOpen: false, itemId: null, itemTitle: '' })}
            />
        </div>
    );
};

export default KGTVManager;
