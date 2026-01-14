import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Mail, Lock, LogIn, AlertCircle, Loader2 } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate('/admin');
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-gradient-start/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-terracotta/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-gradient-start to-terracotta p-[1px] mb-6 shadow-2xl shadow-gold-gradient-start/20">
                        <div className="w-full h-full bg-[#0a0a0c] rounded-2xl flex items-center justify-center">
                            <span className="text-3xl font-black text-white italic">K</span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-montserrat font-black text-white mb-2 tracking-tighter">
                        ADMIN <span className="epic-text">PORTAL</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Welcome back, manager. Please authenticate.</p>
                </div>

                <div className="bg-[#0f0f12]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3 text-red-400 animate-shake">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <p className="text-sm font-medium">{error}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-gold-gradient-start transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-gradient-start/50 focus:bg-white/10 transition-all font-inter"
                                    placeholder="admin@kgill.media"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-gold-gradient-start transition-colors" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-gradient-start/50 focus:bg-white/10 transition-all font-inter"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta text-charcoal font-black rounded-2xl py-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-gradient-start/40 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-terracotta via-marigold to-gold-gradient-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center justify-center gap-2">
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <LogIn className="w-5 h-5" />
                                        <span>AUTHENTICATE</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                        Back to Public Site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
