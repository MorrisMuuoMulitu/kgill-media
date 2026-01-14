import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isDangerous?: boolean;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    isDangerous = false,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-md"
                onClick={onCancel}
            />

            {/* Dialog */}
            <div className="relative w-full max-w-md bg-[#0f0f12] border border-white/10 rounded-[24px] p-6 shadow-2xl animate-scale-in">
                {/* Close button */}
                <button
                    onClick={onCancel}
                    className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDangerous
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-gold-gradient-start/10 text-gold-gradient-start'
                    }`}>
                    <AlertTriangle className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-montserrat font-black text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-400 font-inter mb-6 leading-relaxed">
                    {message}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white font-bold transition-all"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onCancel();
                        }}
                        className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${isDangerous
                                ? 'bg-red-500 hover:bg-red-600 text-white'
                                : 'bg-gold-gradient text-charcoal hover:shadow-lg hover:shadow-gold-gradient-start/30'
                            }`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
