import React, { useState, useEffect } from 'react';
import {
    Briefcase,
    Plus,
    Trash2,
    Edit2,
    Save,
    X,
    Image as ImageIcon,
    Link as LinkIcon,
    Loader2,
    Eye,
    ExternalLink
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface CaseStudy {
    id: number;
    title: string;
    client: string;
    challenge: string;
    solution: string;
    impact: string;
    image: string;
    video_url: string;
}

const CaseStudiesManager = () => {
    const [studies, setStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState<Partial<CaseStudy>>({
        title: '',
        client: '',
        challenge: '',
        solution: '',
        impact: '',
        image: '',
        video_url: ''
    });

    useEffect(() => {
        fetchStudies();
    }, []);

    const fetchStudies = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('case_studies')
            .select('*')
            .order('id', { ascending: false });

        if (data) setStudies(data);
        setLoading(false);
    };

    const handleSave = async () => {
        if (!formData.title || !formData.client) return;

        setLoading(true);
        if (editingId) {
            await supabase
                .from('case_studies')
                .update(formData)
                .eq('id', editingId);
        } else {
            await supabase
                .from('case_studies')
                .insert([formData]);
        }

        await fetchStudies();
        resetForm();
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this case study?')) return;
        setLoading(true);
        await supabase.from('case_studies').delete().eq('id', id);
        await fetchStudies();
    };

    const startEdit = (study: CaseStudy) => {
        setEditingId(study.id);
        setFormData(study);
        setIsAdding(true);
    };

    const resetForm = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData({
            title: '',
            client: '',
            challenge: '',
            solution: '',
            impact: '',
            image: '',
            video_url: ''
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white mb-2 italic">
                        CASE <span className="text-gold-gradient-start">STUDIES</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Manage your high-impact project highlights.</p>
                </div>
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 bg-gradient-to-r from-gold-gradient-start to-terracotta px-6 py-3 rounded-2xl font-bold text-charcoal hover:scale-105 transition-all shadow-lg shadow-gold-gradient-start/20"
                    >
                        <Plus className="w-5 h-5" />
                        Create Case Study
                    </button>
                )}
            </div>

            {isAdding && (
                <div className="bg-[#0f0f12]/80 backdrop-blur-xl border border-gold-gradient-start/30 rounded-3xl p-8 animate-fade-in">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            {editingId ? <Edit2 className="w-5 h-5 text-gold-gradient-start" /> : <Plus className="w-5 h-5 text-gold-gradient-start" />}
                            {editingId ? 'Edit Case Study' : 'New Case Study'}
                        </h2>
                        <button onClick={resetForm} className="text-gray-500 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Project Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                    placeholder="e.g. The Real People Talk Show"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Client Name</label>
                                <input
                                    type="text"
                                    value={formData.client}
                                    onChange={e => setFormData({ ...formData, client: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                    placeholder="e.g. KGILL TV"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Image URL (ImageKit/YouTube)</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.image}
                                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                        placeholder="https://..."
                                    />
                                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Video Link / Action URL</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.video_url}
                                        onChange={e => setFormData({ ...formData, video_url: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                        placeholder="/kgill-tv or YouTube link"
                                    />
                                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">The Challenge</label>
                                <textarea
                                    rows={2}
                                    value={formData.challenge}
                                    onChange={e => setFormData({ ...formData, challenge: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                    placeholder="What was the problem?"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Our Solution</label>
                                <textarea
                                    rows={2}
                                    value={formData.solution}
                                    onChange={e => setFormData({ ...formData, solution: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                    placeholder="How did you solve it?"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">The Impact</label>
                                <textarea
                                    rows={2}
                                    value={formData.impact}
                                    onChange={e => setFormData({ ...formData, impact: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-gradient-start/50 outline-none transition-all"
                                    placeholder="What were the results?"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-white/5">
                        <button
                            onClick={resetForm}
                            className="px-6 py-3 rounded-xl font-bold text-gray-400 hover:bg-white/5 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="flex items-center gap-2 bg-gradient-to-r from-gold-gradient-start to-terracotta px-8 py-3 rounded-xl font-bold text-charcoal shadow-lg"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                            {editingId ? 'Update Case Study' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 gap-6">
                {loading && !isAdding ? (
                    <div className="py-20 flex justify-center">
                        <Loader2 className="w-10 h-10 text-gold-gradient-start animate-spin" />
                    </div>
                ) : studies.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-[40px]">
                        <Briefcase className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest">No case studies yet.</p>
                    </div>
                ) : (
                    studies.map((study) => (
                        <div key={study.id} className="group bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden hover:border-gold-gradient-start/30 transition-all flex flex-col md:flex-row shadow-2xl">
                            <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                                <img src={study.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f12] via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="flex-1 p-8 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{study.title}</h3>
                                            <p className="text-gold-gradient-start font-black uppercase text-[10px] tracking-widest mt-1">Client: {study.client}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => startEdit(study)}
                                                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all shadow-xl"
                                            >
                                                <Edit2 className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(study.id)}
                                                className="p-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl text-red-400 transition-all shadow-xl"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                                        <div>
                                            <p className="text-[10px] font-black text-terracotta uppercase tracking-widest mb-1">Challenge</p>
                                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-cyan uppercase tracking-widest mb-1">Solution</p>
                                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{study.solution}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gold-gradient-start uppercase tracking-widest mb-1">Impact</p>
                                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{study.impact}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <a
                                        href={study.video_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/40 hover:text-white text-xs font-bold flex items-center gap-2 transition-colors uppercase tracking-widest"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Preview Link
                                    </a>
                                    <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">ID: #{study.id}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CaseStudiesManager;
