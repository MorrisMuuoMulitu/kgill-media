import React, { useState, useEffect } from 'react';

interface YouTubeThumbnailProps {
    videoId: string;
    alt: string;
    className?: string;
}

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ videoId, alt, className = "" }) => {
    const qualities = ['maxresdefault', 'hqdefault', 'sddefault', 'default'];
    const [qualityIndex, setQualityIndex] = useState(0);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Reset if videoId changes
        setQualityIndex(0);
        setError(false);
    }, [videoId]);

    const handleImageError = () => {
        if (qualityIndex < qualities.length - 1) {
            setQualityIndex(prev => prev + 1);
        } else {
            setError(true);
        }
    };

    if (error) {
        return (
            <div className={`flex flex-col items-center justify-center bg-slate-900 ${className}`}>
                <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center mb-2">
                    <span className="text-white/20 text-xs">!</span>
                </div>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Image Unavailable</span>
            </div>
        );
    }

    return (
        <img
            src={`https://img.youtube.com/vi/${videoId}/${qualities[qualityIndex]}.jpg`}
            alt={alt}
            className={`${className} transition-opacity duration-300`}
            onError={handleImageError}
            loading="lazy"
        />
    );
};

export default YouTubeThumbnail;
