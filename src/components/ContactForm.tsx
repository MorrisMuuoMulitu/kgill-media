import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        service_interest: 'General Inquiry',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    ...formData,
                    status: 'new',
                    created_at: new Date().toISOString()
                }
            ]);

        if (!error) {
            setSubmitted(true);
            setFormData({
                full_name: '',
                email: '',
                phone: '',
                service_interest: 'General Inquiry',
                message: ''
            });
        }
        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="bg-[#0f0f12]/80 backdrop-blur-xl border border-emerald-500/20 rounded-[40px] p-12 text-center animate-scale-in">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-montserrat font-black text-white italic uppercase mb-4">Transmission <span className="text-emerald-400">Received</span></h3>
                <p className="text-gray-400 font-inter mb-8">Thank you for reaching out. Our team will decrypt your message and get back to you shortly.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold-gradient-start font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-gradient-start/5 rounded-full blur-[100px] -z-10 group-hover:bg-gold-gradient-start/10 transition-colors"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-500 uppercase ml-1 flex items-center gap-2">
                            <User className="w-3.5 h-3.5" /> Full Name
                        </label>
                        <input
                            type="text" required
                            value={formData.full_name}
                            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-500 uppercase ml-1 flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5" /> Email Address
                        </label>
                        <input
                            type="email" required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-500 uppercase ml-1 flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5" /> Phone Number
                        </label>
                        <input
                            type="tel" required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
                            placeholder="+254 ..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-500 uppercase ml-1 flex items-center gap-2">
                            <Briefcase className="w-3.5 h-3.5" /> Interested In
                        </label>
                        <select
                            value={formData.service_interest}
                            onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter cursor-pointer"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Photography">Photography</option>
                            <option value="Videography">Videography</option>
                            <option value="Film Production">Film Production</option>
                            <option value="Talk Show / Podcast">Talk Show / Podcast</option>
                            <option value="Sinema Mtaani">Sinema Mtaani</option>
                        </select>
                    </div>

                    <div className="col-span-full space-y-2">
                        <label className="text-xs font-black text-gray-500 uppercase ml-1 flex items-center gap-2">
                            <MessageSquare className="w-3.5 h-3.5" /> Your Message
                        </label>
                        <textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter resize-none"
                            placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-5 hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm mt-4"
                >
                    {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            <Send className="w-5 h-5" /> Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
