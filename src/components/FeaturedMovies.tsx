import React, { useState } from 'react';
import { Play, Info, Clock, ChevronRight, ChevronLeft, Film, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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

interface FeaturedMoviesProps {
    movies: Movie[];
}

const FeaturedMovies: React.FC<FeaturedMoviesProps> = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredMovies = movies.filter(m => m.featured);

    if (featuredMovies.length === 0) return null;

    const currentMovie = featuredMovies[currentIndex];

    const next = () => setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background cinematic glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gold-gradient-start/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                            <Film className="w-4 h-4 text-gold-gradient-start" />
                            <span className="text-gold-gradient-start font-black text-[10px] uppercase tracking-[0.2em]">Cinematic Productions</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-montserrat font-black text-white italic uppercase leading-tight">
                            PREMIUM <span className="epic-text">CINEMA</span>
                        </h2>
                    </div>
                    <Link
                        to="/movies"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest transition-all"
                    >
                        Explore Gallery
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="relative group">
                    <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5">
                        <img
                            src={currentMovie.thumbnail_url}
                            alt={currentMovie.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute inset-0 p-12 flex flex-col justify-center">
                            <div className="max-w-xl animate-fade-in">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-gold-gradient text-charcoal text-[10px] font-black uppercase tracking-widest rounded-lg">
                                        {currentMovie.category}
                                    </span>
                                    <span className="text-white/60 text-xs font-bold flex items-center gap-2">
                                        <Clock className="w-3.5 h-3.5 text-gold-gradient-start" />
                                        {currentMovie.duration}
                                    </span>
                                    <span className="text-white/60 text-xs font-bold px-2 py-0.5 border border-white/20 rounded">
                                        {currentMovie.quality}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-6 line-clamp-1">
                                    {currentMovie.title}
                                </h3>

                                <p className="text-lg text-gray-400 font-inter mb-10 line-clamp-2 leading-relaxed">
                                    {currentMovie.description}
                                </p>

                                <div className="flex items-center gap-6">
                                    <Link
                                        to="/movies"
                                        className="px-10 py-5 bg-gold-gradient text-charcoal font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-gold-gradient-start/20"
                                    >
                                        <Play className="w-6 h-6 fill-current" />
                                        WATCH NOW
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-12 right-12 flex gap-3">
                            {featuredMovies.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-gold-gradient' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMovies;
