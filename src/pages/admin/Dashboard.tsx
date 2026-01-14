import React, { useEffect, useState } from 'react';
import {
    Video,
    Image as ImageIcon,
    MessageSquare,
    TrendingUp,
    Calendar,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Dashboard = () => {
    const [stats, setStats] = useState({
        videos: 0,
        portfolio: 0,
        services: 0,
        messages: 0
    });
    interface ContentItem {
        id: number;
        title: string;
        created_at: string;
        category: string;
        type?: string;
        contentType?: string; // Added for combined content
        image?: string; // Added for combined content (thumbnail)
        year?: string; // Added for portfolio items
    }

    const [recentContent, setRecentContent] = useState<ContentItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true);
            const [
                { count: videoCount },
                { count: portfolioCount },
                { count: serviceCount },
                { count: messageCount },
                { data: recentPortfolio },
                { data: recentVideos }
            ] = await Promise.all([
                supabase.from('youtube_videos').select('*', { count: 'exact', head: true }),
                supabase.from('portfolio_items').select('*', { count: 'exact', head: true }),
                supabase.from('services').select('*', { count: 'exact', head: true }),
                supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
                supabase.from('portfolio_items').select('*').order('id', { ascending: false }).limit(3),
                supabase.from('youtube_videos').select('*').order('id', { ascending: false }).limit(2)
            ]);

            setStats({
                videos: videoCount || 0,
                portfolio: portfolioCount || 0,
                services: serviceCount || 0,
                messages: messageCount || 0
            });

            // Combine and sort recent content
            const combined = [
                ...(recentPortfolio || []).map(item => ({ ...item, contentType: 'Portfolio' })),
                ...(recentVideos || []).map(item => ({ ...item, contentType: 'Video', image: item.thumbnail }))
            ].sort((a, b) => b.id - a.id);

            setRecentContent(combined);
            setLoading(false);
        };

        fetchDashboardData();
    }, []);

    const statCards = [
        { label: 'Total Videos', value: stats.videos, icon: <Video className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
        { label: 'Portfolio Items', value: stats.portfolio, icon: <ImageIcon className="w-6 h-6" />, color: 'from-gold-gradient-start to-marigold' },
        { label: 'Active Services', value: stats.services, icon: <Sparkles className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
        { label: 'New Messages', value: stats.messages, icon: <MessageSquare className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <div className="space-y-10 pb-12">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white mb-2 italic">
                        DASHBOARD <span className="text-gold-gradient-start">OVERVIEW</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Here's what's happening across KGILL Media today.</p>
                </div>
                <div className="flex items-center gap-3 bg-[#0f0f12]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
                    <Calendar className="w-5 h-5 text-gold-gradient-start" />
                    <span className="font-semibold text-gray-200">
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300 overflow-hidden"
                    >
                        <div className={`absolute top - 0 right - 0 w - 24 h - 24 bg - gradient - to - br ${stat.color} opacity - 5 blur - 2xl group - hover: opacity - 10 transition - opacity`}></div>

                        <div className="flex items-center justify-between mb-4">
                            <div className={`p - 3 rounded - 2xl bg - gradient - to - br ${stat.color} bg - opacity - 10 text - white shadow - lg`}>
                                {stat.icon}
                            </div>
                            <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold">
                                <TrendingUp className="w-4 h-4" />
                                <span>Activity</span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-3xl font-montserrat font-black text-white">
                                {loading ? '...' : stat.value}
                            </h3>
                            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Content Table */}
                <div className="lg:col-span-2 bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-gold-gradient-start" />
                            Recent Content
                        </h3>
                        <div className="flex gap-2">
                            <a href="/admin/portfolio" className="text-xs font-bold text-gray-500 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg">PORTFOLIO</a>
                            <a href="/admin/kgtv" className="text-xs font-bold text-gray-500 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg">VIDEOS</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {loading ? (
                            [1, 2, 3].map(i => (
                                <div key={i} className="h-20 bg-white/5 animate-pulse rounded-2xl"></div>
                            ))
                        ) : recentContent.length === 0 ? (
                            <div className="text-center py-10 text-gray-500 font-medium italic border border-dashed border-white/10 rounded-2xl">
                                No recent content found. Start by adding some!
                            </div>
                        ) : (
                            recentContent.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-transparent hover:border-white/10 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-gray-400 overflow-hidden shrink-0">
                                            {item.image ? (
                                                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            ) : (
                                                <ImageIcon className="w-6 h-6" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover:text-gold-gradient-start transition-colors line-clamp-1">{item.title}</h4>
                                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{item.contentType} • {item.category || item.year}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-8">Quick Actions</h3>
                    <div className="grid grid-cols-1 gap-4 flex-1">
                        <button onClick={() => window.location.href = '/admin/kgtv'} className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gold-gradient-start/10 to-transparent border border-gold-gradient-start/20 hover:border-gold-gradient-start/40 transition-all text-left">
                            <div className="p-3 rounded-xl bg-gold-gradient text-charcoal shadow-lg">
                                <Video className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-white group-hover:translate-x-1 transition-transform">Manage Videos</span>
                        </button>

                        <button onClick={() => window.location.href = '/admin/portfolio'} className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all text-left">
                            <div className="p-3 rounded-xl bg-blue-500 text-white shadow-lg">
                                <ImageIcon className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-white group-hover:translate-x-1 transition-transform">Update Portfolio</span>
                        </button>

                        <button onClick={() => window.location.href = '/admin/messages'} className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all text-left">
                            <div className="p-3 rounded-xl bg-purple-500 text-white shadow-lg">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-white group-hover:translate-x-1 transition-transform">Read Messages</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
