import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import {
    Play,
    Info,
    X,
    Clock,
    Star,
    Film,
    ChevronRight,
    Volume2,
    Maximize,
    Loader2,
    Calendar,
    Tv,
    Youtube
} from 'lucide-react';
import YouTubePlayerModal from '../components/YouTubePlayerModal';
import { motion, AnimatePresence } from 'framer-motion';

interface Movie {
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

const MoviesPg = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');
    const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false);
    const [activeYoutubeId, setActiveYoutubeId] = useState('');
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        fetchMovies();
        const handleKeys = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedMovie(null);
                setIsPlaying(false);
            }
            if (e.code === 'Space' && selectedMovie && isPlaying) {
                e.preventDefault();
                if (videoRef.current) {
                    if (videoRef.current.paused) videoRef.current.play();
                    else videoRef.current.pause();
                }
            }
            if (e.key.toLowerCase() === 'm' && selectedMovie && isPlaying) {
                if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
            }
        };
        window.addEventListener('keydown', handleKeys);
        return () => window.removeEventListener('keydown', handleKeys);
    }, [selectedMovie, isPlaying]);

    const fetchMovies = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('movies')
            .select('*')
            .order('featured', { ascending: false })
            .order('created_at', { ascending: false });

        if (data) setMovies(data);
        setLoading(false);
    };

    const categories = ['All', ...Array.from(new Set(movies.map(m => m.category)))];
    const filteredMovies = activeFilter === 'All'
        ? movies
        : movies.filter(m => m.category === activeFilter);

    const featuredMovie = movies.find(m => m.featured) || movies[0];

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handlePlayMovie = (movie: Movie) => {
        const youtubeId = getYoutubeId(movie.file_url);
        if (youtubeId) {
            setActiveYoutubeId(youtubeId);
            setIsYoutubeModalOpen(true);
            setSelectedMovie(movie);
        } else {
            setSelectedMovie(movie);
            setIsPlaying(true);
        }
        incrementViews(movie.id);
    };

    const incrementViews = async (id: number) => {
        const movie = movies.find(m => m.id === id);
        if (movie) {
            await supabase.from('movies').update({ views: (movie.views || 0) + 1 }).eq('id', id);
        }
    };

    return (
        <div className="min-h-screen bg-charcoal text-white pt-20">
            {/* Hero Section - Featured Movie */}
            {!loading && featuredMovie && (
                <section className="relative h-[80vh] w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={featuredMovie.thumbnail_url}
                            alt={featuredMovie.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                    </div>

                    <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
                        <div className="max-w-2xl animate-fade-in">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-gold-gradient text-charcoal text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Featured Production
                                </span>
                                <span className="text-gray-400 text-xs font-bold flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {featuredMovie.duration}
                                </span>
                                <span className="text-gray-400 text-xs font-bold border border-white/20 px-2 rounded">
                                    {featuredMovie.quality}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black font-montserrat italic uppercase mb-6 leading-tight">
                                {featuredMovie.title}
                            </h1>

                            <p className="text-lg text-gray-300 font-inter mb-10 leading-relaxed line-clamp-3">
                                {featuredMovie.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => handlePlayMovie(featuredMovie)}
                                    className="px-8 py-4 bg-gold-gradient text-charcoal font-black rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-gold-gradient-start/20"
                                >
                                    <Play className="w-6 h-6 fill-current" />
                                    WATCH NOW
                                </button>
                                <button
                                    onClick={() => setSelectedMovie(featuredMovie)}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full flex items-center gap-3 hover:bg-white/20 transition-all"
                                >
                                    <Info className="w-6 h-6" />
                                    DETAILS
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Filters */}
                <div className="flex items-center justify-between mb-12 overflow-x-auto no-scrollbar pb-4">
                    <div className="flex gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeFilter === cat
                                    ? 'bg-gold-gradient text-charcoal'
                                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-widest">
                        <Film className="w-4 h-4" />
                        <span>{filteredMovies.length} Productions</span>
                    </div>
                </div>

                {loading ? (
                    <div className="py-40 flex flex-col items-center justify-center">
                        <Loader2 className="w-12 h-12 text-gold-gradient-start animate-spin mb-4" />
                        <p className="font-black uppercase tracking-widest text-gray-500">Buffering Productions...</p>
                    </div>
                ) : filteredMovies.length === 0 ? (
                    <div className="py-40 text-center bg-white/5 rounded-[40px] border border-dashed border-white/10">
                        <Tv className="w-16 h-16 text-gray-800 mx-auto mb-4" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest">No productions found in this category</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredMovies.map((movie) => (
                            <div
                                key={movie.id}
                                className="group relative flex flex-col cursor-pointer"
                                onClick={() => handlePlayMovie(movie)}
                            >
                                <div className="aspect-[2/3] rounded-2xl overflow-hidden relative shadow-2xl">
                                    <img
                                        src={movie.thumbnail_url}
                                        alt={movie.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center text-charcoal transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <Play className="w-8 h-8 fill-current" />
                                        </div>
                                    </div>

                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                                            {movie.quality}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gold-gradient-start text-[8px] font-black uppercase tracking-widest">{movie.category}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white line-clamp-1">{movie.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Movie Preview / Player Modal */}
            <AnimatePresence>
                {selectedMovie && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
                            onClick={() => { setSelectedMovie(null); setIsPlaying(false); }}
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-7xl bg-[#0a0a0c] rounded-none md:rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] max-h-screen md:max-h-[92vh] flex flex-col border border-white/5"
                        >

                            <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
                                {isPlaying ? (
                                    <div className="aspect-video bg-black w-full relative group">
                                        {isVideoLoading && (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black">
                                                <Loader2 className="w-12 h-12 text-gold-gradient-start animate-spin mb-4" />
                                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Initializing Cinema Stream...</p>
                                            </div>
                                        )}
                                        <video
                                            ref={videoRef}
                                            src={selectedMovie.file_url}
                                            controls
                                            autoPlay
                                            playsInline
                                            className={`w-full h-full transition-opacity duration-700 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                                            onLoadStart={() => setIsVideoLoading(true)}
                                            onCanPlay={() => setIsVideoLoading(false)}
                                            onEnded={() => setIsPlaying(false)}
                                            onError={(e) => {
                                                console.error('Video load error', e);
                                                setIsVideoLoading(false);
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-video w-full relative group">
                                        <img
                                            src={selectedMovie.thumbnail_url}
                                            alt={selectedMovie.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                                            <button
                                                onClick={() => { setIsPlaying(true); incrementViews(selectedMovie.id); }}
                                                className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center text-charcoal hover:scale-110 transition-all shadow-2xl"
                                            >
                                                <Play className="w-10 h-10 fill-current ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="p-10">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-gold-gradient-start font-black text-sm uppercase tracking-widest">{selectedMovie.category}</span>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-400 text-sm font-bold">{selectedMovie.release_year}</span>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-400 text-sm font-bold">{selectedMovie.duration}</span>
                                                <span className="px-2 py-0.5 border border-gray-700 rounded text-[10px] text-gray-500 font-bold uppercase">{selectedMovie.quality}</span>
                                            </div>

                                            <h2 className="text-4xl font-black text-white italic uppercase mb-6">{selectedMovie.title}</h2>
                                            <p className="text-lg text-gray-400 font-inter leading-relaxed mb-8">
                                                {selectedMovie.description}
                                            </p>

                                            <div className="flex flex-wrap gap-8 py-6 border-t border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold-gradient-start">
                                                        <Play className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Plays</p>
                                                        <p className="text-sm font-bold text-white">{selectedMovie.views.toLocaleString()}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan">
                                                        <Star className="w-5 h-5 fill-current" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Production</p>
                                                        <p className="text-sm font-bold text-white">KGILL Media Hub</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-terracotta">
                                                        <Maximize className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Quality</p>
                                                        <p className="text-sm font-bold text-white">{selectedMovie.quality}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-72">
                                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Cast & Crew</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold">KM</div>
                                                    <div>
                                                        <p className="text-xs font-bold text-white underline underline-offset-4 decoration-gold-gradient-start decoration-2">Kevinne Mullick O.</p>
                                                        <p className="text-[9px] text-gray-500 uppercase font-bold">Executive Director</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold">KG</div>
                                                    <div>
                                                        <p className="text-xs font-bold text-white">KGILL Production Crew</p>
                                                        <p className="text-[9px] text-gray-500 uppercase font-bold">Cinematography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <YouTubePlayerModal
                isOpen={isYoutubeModalOpen}
                onClose={() => setIsYoutubeModalOpen(false)}
                videoId={activeYoutubeId}
                title={selectedMovie?.title || "Movie Playback"}
            />
        </div>
    );
};

export default MoviesPg;
