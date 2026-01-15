import React, { useState } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import {
    LayoutDashboard,
    Video,
    Image as ImageIcon,
    LogOut,
    Menu,
    X,
    Briefcase,
    ExternalLink,
    MessageSquare,
    Sparkles,
    Film
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    const navItems = [
        { to: '/admin', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
        { to: '/admin/kgtv', icon: <Video className="w-5 h-5" />, label: 'KG TV' },
        { to: '/admin/portfolio', icon: <ImageIcon className="w-5 h-5" />, label: 'Portfolio' },
        { to: '/admin/services', icon: <Briefcase className="w-5 h-5" />, label: 'Services' },
        { to: '/admin/case-studies', icon: <Sparkles className="w-5 h-5" />, label: 'Case Studies' },
        { to: '/admin/movies', icon: <Film className="w-5 h-5" />, label: 'Movies' },
        { to: '/admin/messages', icon: <MessageSquare className="w-5 h-5" />, label: 'Messages' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-64' : 'w-20'
                    } bg-[#0f0f12]/80 backdrop-blur-xl border-r border-white/5 transition-all duration-300 flex flex-col z-50`}
            >
                <div className="p-6 flex items-center justify-between">
                    <div className={`flex items-center gap-3 ${!isSidebarOpen && 'hidden'}`}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-gradient-start to-terracotta flex items-center justify-center font-bold text-charcoal">
                            K
                        </div>
                        <span className="font-montserrat font-bold tracking-tighter text-xl text-white">KGILL<span className="text-gold-gradient-start">+</span></span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1 hover:bg-white/5 rounded-md text-gray-400 hover:text-white"
                    >
                        {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/admin'}
                            className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive
                                    ? 'bg-gradient-to-r from-gold-gradient-start/20 to-terracotta/20 text-gold-gradient-start border border-gold-gradient-start/30 shadow-lg shadow-gold-gradient-start/5'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}
              `}
                        >
                            <div className="shrink-0">{item.icon}</div>
                            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5 space-y-2">
                    <a
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all group"
                    >
                        <ExternalLink className="w-5 h-5" />
                        {isSidebarOpen && <span className="font-medium">Live Website</span>}
                    </a>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all group"
                    >
                        <LogOut className="w-5 h-5" />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {/* Top Header/Nav */}
                <header className="h-16 border-b border-white/5 bg-[#16161a]/50 backdrop-blur-md flex items-center justify-between px-8 z-40">
                    <h2 className="text-lg font-semibold text-gray-300">
                        Admin Management
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end mr-2">
                            <span className="text-sm font-medium text-white">Admin User</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Manager</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-gold-gradient-start font-bold">
                            AD
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 relative">
                    {/* Subtle Background Decorations */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-gradient-start/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
