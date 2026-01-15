import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import {
    Plus,
    Search,
    Image as ImageIcon,
    Edit2,
    Trash2,
    X,
    Loader2,
    Upload
} from 'lucide-react';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import BulkUploadModal from '../../components/admin/BulkUploadModal';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    width: number;
    height: number;
    type: string;
    year: string;
}

const PORTFOLIO_CATEGORIES = [
    { id: 'studio', label: 'Studio Session' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'events', label: 'Events' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'headshots', label: 'Headshots' },
    { id: 'products', label: 'Products' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'sports', label: 'Sports' },
    { id: 'africanism', label: 'African Culture' }
];

const PortfolioManager = () => {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; itemId: number | null; itemTitle: string }>({
        isOpen: false,
        itemId: null,
        itemTitle: ''
    });
    const [uploading, setUploading] = useState(false);

    const [availableCategories, setAvailableCategories] = useState<{ id: string, label: string }[]>([]);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'studio',
        image: '',
        type: 'Studio Session',
        year: new Date().getFullYear().toString(),
        width: 320,
        height: 212
    });

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        setLoading(true);

        const { data: itemsData } = await supabase
            .from('portfolio_items')
            .select('*')
            .order('category', { ascending: true });

        if (itemsData) setItems(itemsData);

        // Get unique categories from items that are NOT in our standard list
        const itemCats = itemsData ? Array.from(new Set(itemsData.map(i => i.category))) : [];
        const extraCats = itemCats
            .filter(id => !PORTFOLIO_CATEGORIES.find(c => c.id === id))
            .map(id => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) }));

        setAvailableCategories([...PORTFOLIO_CATEGORIES, ...extraCats]);
        setLoading(false);
    };

    const fetchItems = async () => {
        const { data } = await supabase
            .from('portfolio_items')
            .select('*')
            .order('category', { ascending: true });

        if (data) setItems(data);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            created_at: new Date().toISOString()
        };

        if (editingItem) {
            await supabase.from('portfolio_items').update(payload).eq('id', editingItem.id);
        } else {
            await supabase.from('portfolio_items').insert([payload]);
        }

        setIsModalOpen(false);
        setEditingItem(null);
        setFormData({
            title: '',
            category: 'studio',
            image: '',
            type: 'Studio Session',
            year: new Date().getFullYear().toString(),
            width: 320,
            height: 212
        });
        fetchItems();
    };

    const handleDelete = async (id: number) => {
        setLoading(true);
        await supabase.from('portfolio_items').delete().eq('id', id);
        await fetchItems();
        setLoading(false);
    };

    const openDeleteConfirm = (item: PortfolioItem) => {
        setDeleteConfirm({
            isOpen: true,
            itemId: item.id,
            itemTitle: item.title
        });
    };

    const openEdit = (item: PortfolioItem) => {
        setEditingItem(item);
        setFormData({
            title: item.title,
            category: item.category,
            image: item.image,
            type: item.type,
            year: item.year,
            width: item.width,
            height: item.height
        });
        setIsModalOpen(true);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `uploads/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('portfolio')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image: publicUrl }));
        } catch (error: any) {
            console.error('Upload error:', error);
            alert('Upload failed: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const filteredItems = items.filter(item =>
        (activeCategory === 'all' || item.category === activeCategory) &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.type.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white italic">
                        PORTFOLIO <span className="text-gold-gradient-start">MANAGER</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Curate your photography and videography showcase.</p>
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
                            setEditingItem(null);
                            setFormData({
                                title: '',
                                category: 'studio',
                                image: '',
                                type: 'Studio Session',
                                year: new Date().getFullYear().toString(),
                                width: 320,
                                height: 212
                            });
                            setIsModalOpen(true);
                        }}
                        className="flex items-center gap-2 bg-gold-gradient text-charcoal font-black px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all"
                    >
                        <Plus className="w-5 h-5" />
                        <span>ADD SINGLE ITEM</span>
                    </button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="space-y-6 bg-[#0f0f12]/50 p-6 rounded-3xl border border-white/5">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search portfolio by title, type or year..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0f0f12] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Quick Category Filter</label>
                        <span className="text-[10px] font-black text-gold-gradient-start uppercase tracking-widest">{filteredItems.length} items showing</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all border uppercase tracking-widest ${activeCategory === 'all'
                                ? 'bg-gold-gradient text-charcoal border-transparent shadow-[0_0_20px_rgba(255,179,71,0.2)]'
                                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                                }`}
                        >
                            All Work
                        </button>
                        {availableCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all border uppercase tracking-widest ${activeCategory === cat.id
                                    ? 'bg-gold-gradient text-charcoal border-transparent shadow-[0_0_20px_rgba(255,179,71,0.2)]'
                                    : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {loading ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p className="font-medium">Loading portfolio...</p>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div className="col-span-full text-center py-20 bg-[#0f0f12]/50 border border-dashed border-white/10 rounded-3xl">
                        <ImageIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 font-medium">No items found.</p>
                    </div>
                ) : (
                    filteredItems.map((item) => (
                        <div key={item.id} className="group relative bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md border border-white/10 uppercase">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{item.title}</h3>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">{item.type} • {item.year}</p>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => openEdit(item)}
                                        className="flex-1 flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all text-sm font-bold"
                                    >
                                        <Edit2 className="w-4 h-4" /> Edit
                                    </button>
                                    <button
                                        onClick={() => openDeleteConfirm(item)}
                                        className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-xl text-red-400/70 hover:text-red-400 transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
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

                    <div className="relative w-full max-w-2xl bg-[#0f0f12] border border-white/10 rounded-[32px] p-8 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-montserrat font-black text-white italic">
                                {editingItem ? 'EDIT' : 'ADD'} <span className="text-gold-gradient-start">PORTFOLIO ITEM</span>
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
                                        onChange={(e) => {
                                            const catId = e.target.value;
                                            const label = availableCategories.find(c => c.id === catId)?.label || catId;
                                            setFormData({
                                                ...formData,
                                                category: catId,
                                                type: label
                                            });
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all cursor-pointer font-inter"
                                    >
                                        {availableCategories.map(cat => (
                                            <option key={cat.id} value={cat.id} className="bg-[#0f0f12] text-white py-2">{cat.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-span-full space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-sm font-semibold text-gray-400">Image URL / Upload</label>
                                        <label className="cursor-pointer text-[10px] font-black text-gold-gradient-start hover:underline">
                                            {uploading ? 'UPLOADING...' : 'UPLOAD TO STORAGE'}
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={uploading} />
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="https://ik.imagekit.io/... or upload above"
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Work Type (e.g., Wedding Photography)</label>
                                    <input
                                        type="text"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Width (px)</label>
                                    <input
                                        type="number"
                                        value={formData.width}
                                        onChange={(e) => setFormData({ ...formData, width: parseInt(e.target.value) })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Height (px)</label>
                                    <input
                                        type="number"
                                        value={formData.height}
                                        onChange={(e) => setFormData({ ...formData, height: parseInt(e.target.value) })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-4 transition-all hover:shadow-2xl hover:shadow-gold-gradient-start/30 flex items-center justify-center gap-2"
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : editingItem ? 'UPDATE ITEM' : 'ADD TO PORTFOLIO'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirm.isOpen}
                title="Delete Portfolio Item?"
                message={`Are you sure you want to delete "${deleteConfirm.itemTitle}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                isDangerous={true}
                onConfirm={() => deleteConfirm.itemId && handleDelete(deleteConfirm.itemId)}
                onCancel={() => setDeleteConfirm({ isOpen: false, itemId: null, itemTitle: '' })}
            />
            {/* Bulk Upload Modal */}
            <BulkUploadModal
                isOpen={isBulkModalOpen}
                onClose={() => setIsBulkModalOpen(false)}
                onComplete={fetchItems}
                type="portfolio"
            />
        </div>
    );
};

export default PortfolioManager;
