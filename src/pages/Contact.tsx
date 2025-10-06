import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, User, MessageCircle, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Have a project in mind? Want to collaborate? Reach out to us and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-marigold">
                  FOR PEOPLE LIKE YOU
                </h2>
                <p className="text-lg text-gray-300 font-inter leading-relaxed mb-8">
                  We're here to help you tell your story and create meaningful impact in your community.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-marigold/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-white mb-2">Phone</h3>
                    <a href="tel:+254797553148" className="text-gray-300 font-inter hover:text-marigold transition-colors block">
                      +254 797 553 148
                    </a>
                    <a href="tel:+254757749883" className="text-gray-300 font-inter hover:text-marigold transition-colors block mt-1">
                      +254 757 749 883
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-cyan/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan to-slate-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-white mb-2">Email</h3>
                    <a href="mailto:kgillcompany@gmail.com" className="text-gray-300 font-inter hover:text-cyan transition-colors">
                      kgillcompany@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-terracotta/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-marigold rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-white mb-2">Address</h3>
                    <p className="text-gray-300 font-inter">
                      23138-00100<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-purple/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple to-pink rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-white mb-2">Working Hours</h3>
                    <p className="text-gray-300 font-inter">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold font-montserrat text-white mb-6">
                SEND US A MESSAGE
              </h3>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-gradient-to-r from-marigold/20 to-terracotta/20 border border-marigold/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-marigold" />
                    <p className="text-marigold font-inter font-semibold">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30 rounded-xl">
                  <p className="text-red-300 font-inter font-semibold">
                    {submitError}
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-inter font-semibold mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white font-inter focus:outline-none focus:ring-2 focus:ring-marigold/50 focus:border-marigold transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-inter font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white font-inter focus:outline-none focus:ring-2 focus:ring-marigold/50 focus:border-marigold transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-inter font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white font-inter focus:outline-none focus:ring-2 focus:ring-marigold/50 focus:border-marigold transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-inter font-semibold mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pt-3 pl-3 flex items-start pointer-events-none">
                      <MessageCircle className="w-5 h-5 text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white font-inter focus:outline-none focus:ring-2 focus:ring-marigold/50 focus:border-marigold transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-4 rounded-xl font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-white">
            CONNECT WITH US
          </h2>
          <p className="text-xl text-gray-400 font-inter mb-12 max-w-2xl mx-auto">
            Follow us on social media for updates, behind-the-scenes content, and community highlights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              className="group flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-marigold/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-marigold to-terracotta rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </div>
              <span className="text-white font-inter font-semibold group-hover:text-marigold transition-colors">
                Facebook
              </span>
            </a>
            
            <a 
              href="#" 
              className="group flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-cyan/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan to-slate-blue rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-white font-inter font-semibold group-hover:text-cyan transition-colors">
                Instagram
              </span>
            </a>
            
            <a 
              href="#" 
              className="group flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-terracotta/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-terracotta to-marigold rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <span className="text-white font-inter font-semibold group-hover:text-terracotta transition-colors">
                Twitter
              </span>
            </a>
            
            <a 
              href="#" 
              className="group flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-slate-blue/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-slate-blue to-cyan rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="text-white font-inter font-semibold group-hover:text-slate-blue transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* KGILL TV Contact */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center">
              <Tv className="w-6 h-6 text-charcoal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
              KGILL <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">TV</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-400 font-inter mb-8 max-w-2xl mx-auto">
            "The Real People Show is a talk show where the conversations are pure, honest and youtrmut, addressing the real issues being said on this show, it's all about #THEREALPEOPLESHOWT"
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-bold font-montserrat text-white mb-3">For More Info</h3>
              <a href="tel:+254785634805774" className="text-gray-300 font-inter hover:text-marigold transition-colors">
                +254 785 634 805774
              </a>
            </div>
            
            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-bold font-montserrat text-white mb-3">Email Us</h3>
              <a href="mailto:kgillcompany@gmail.com" className="text-gray-300 font-inter hover:text-cyan transition-colors">
                kgillcompany@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;