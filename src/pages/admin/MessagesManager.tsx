import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import {
    Mail,
    User,
    Phone,
    MessageSquare,
    Clock,
    Archive,
    CheckCircle,
    Trash2,
    Loader2,
    Search,
    Filter
} from 'lucide-react';

interface Submission {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    service_interest: string;
    message: string;
    status: string;
    created_at: string;
}

const MessagesManager = () => {
    const [messages, setMessages] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        const { data } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setMessages(data);
        setLoading(false);
    };

    const updateStatus = async (id: number, status: string) => {
        await supabase.from('contact_submissions').update({ status }).eq('id', id);
        fetchMessages();
    };

    const deleteMessage = async (id: number) => {
        if (window.confirm('Permanently delete this message?')) {
            await supabase.from('contact_submissions').delete().eq('id', id);
            fetchMessages();
        }
    };

    const filteredMessages = messages.filter(m => {
        const matchesFilter = filter === 'all' || m.status === filter;
        const matchesSearch = m.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.message.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white italic">
                        MESSAGES <span className="text-gold-gradient-start">CENTER</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Manage your incoming leads and communications.</p>
                </div>
                <div className="flex bg-[#0f0f12]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden">
                    {['all', 'new', 'replied', 'archived'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-widest ${filter === f ? 'bg-gold-gradient text-charcoal shadow-lg' : 'text-gray-500 hover:text-white'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search messages by name, email or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0f0f12]/80 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                />
            </div>

            <div className="space-y-4">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p className="font-medium font-inter uppercase tracking-widest text-xs">Decrypting communications...</p>
                    </div>
                ) : filteredMessages.length === 0 ? (
                    <div className="text-center py-20 bg-[#0f0f12]/50 border border-dashed border-white/10 rounded-[32px]">
                        <Mail className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">No transmissions found</p>
                    </div>
                ) : (
                    filteredMessages.map((msg) => (
                        <div key={msg.id} className={`group bg-[#0f0f12]/80 backdrop-blur-xl border ${msg.status === 'new' ? 'border-gold-gradient-start/30' : 'border-white/5'} rounded-[32px] overflow-hidden hover:border-white/10 transition-all duration-300`}>
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Sender Info */}
                                    <div className="lg:w-1/3 space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-gold-gradient-start shadow-xl">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white">{msg.full_name}</h4>
                                                <div className="flex items-center gap-1.5 text-xs font-black text-gold-gradient-start uppercase tracking-tighter">
                                                    <CheckCircle className={`w-3.5 h-3.5 ${msg.status === 'replied' ? 'text-emerald-400' : 'text-gray-600'}`} />
                                                    {msg.status}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-2">
                                            <a href={`mailto:${msg.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                                <Mail className="w-4 h-4 group-hover:text-gold-gradient-start" />
                                                {msg.email}
                                            </a>
                                            <a href={`tel:${msg.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                                <Phone className="w-4 h-4 group-hover:text-gold-gradient-start" />
                                                {msg.phone}
                                            </a>
                                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                                <Clock className="w-4 h-4" />
                                                {new Date(msg.created_at).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message Content */}
                                    <div className="lg:w-2/3 flex flex-col justify-between">
                                        <div>
                                            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">
                                                Interest: {msg.service_interest || 'General Inquiry'}
                                            </div>
                                            <p className="text-gray-300 font-inter leading-relaxed whitespace-pre-wrap">
                                                {msg.message}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/5 lg:justify-end">
                                            {msg.status === 'new' && (
                                                <button
                                                    onClick={() => updateStatus(msg.id, 'replied')}
                                                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                                                >
                                                    <CheckCircle className="w-4 h-4" /> Mark as Replied
                                                </button>
                                            )}
                                            {msg.status !== 'archived' && (
                                                <button
                                                    onClick={() => updateStatus(msg.id, 'archived')}
                                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                                                >
                                                    <Archive className="w-4 h-4" /> Archive
                                                </button>
                                            )}
                                            {msg.status === 'archived' && (
                                                <button
                                                    onClick={() => updateStatus(msg.id, 'new')}
                                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                                                >
                                                    <Clock className="w-4 h-4" /> Move to New
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteMessage(msg.id)}
                                                className="p-3 bg-red-500/5 hover:bg-red-500/10 text-red-400/50 hover:text-red-400 rounded-xl transition-all"
                                                title="Delete Permanently"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MessagesManager;
