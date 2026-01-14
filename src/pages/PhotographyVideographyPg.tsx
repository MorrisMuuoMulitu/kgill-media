import React, { useState, useEffect } from 'react';
import {
  Aperture, Award, Bike, Building2, CalendarDays, Camera,
  HeartHandshake, Home, Shirt, User, X, ArrowRight, Palette, Package, Sparkles
} from 'lucide-react';

import ImmersiveGallery from '../components/ImmersiveGallery';
import SkeletonLoader from '../components/SkeletonLoader';
import { Gallery } from 'react-grid-gallery';
import { supabase } from '../lib/supabase';
import ContactForm from '../components/ContactForm';



const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [showFullCollectionModal, setShowFullCollectionModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ title: '', image: '', type: '', year: '' });
  const [bookingService, setBookingService] = useState('');
  const [bookingPackage, setBookingPackage] = useState('');
  const [loading, setLoading] = useState(true);

  interface Service {
    id: string;
    title: string;
    description: string;
    icon?: string;
  }

  interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    type?: string;
    year?: string;
  }

  interface Package {
    id: number;
    name: string;
    price: string;
    features: string[];
    service_id: string;
  }

  const [services, setServices] = useState<Service[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);

  const iconMap: { [key: string]: React.ReactNode } = {
    studio: <Aperture className="w-8 h-8" />,
    wedding: <HeartHandshake className="w-8 h-8" />,
    corporate: <Building2 className="w-8 h-8" />,
    fashion: <Shirt className="w-8 h-8" />,
    'real-estate': <Home className="w-8 h-8" />,
    events: <CalendarDays className="w-8 h-8" />,
    sports: <Bike className="w-8 h-8" />,
    graduation: <User className="w-8 h-8" />,
    africanism: <Sparkles className="w-8 h-8" />,
    headshots: <Camera className="w-8 h-8" />,
    commercial: <Building2 className="w-8 h-8" />,
    creative: <Palette className="w-8 h-8" />,
    products: <Package className="w-8 h-8" />,
    event: <CalendarDays className="w-8 h-8" />,
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [
        { data: servicesData },
        { data: portfolioData },
        { data: packagesData }
      ] = await Promise.all([
        supabase.from('services').select('*').order('title'),
        supabase.from('portfolio_items').select('*').order('category'),
        supabase.from('packages').select('*').order('id')
      ]);

      if (servicesData) setServices(servicesData);
      if (portfolioData) setPortfolioItems(portfolioData);

      if (packagesData && servicesData) {
        const organized = servicesData.map(s => ({
          serviceId: s.id,
          packages: packagesData.filter(p => p.service_id === s.id)
        }));
        setPackages(organized);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : services.some(s => s.id === activeCategory)
      ? portfolioItems.filter(item => item.category === activeCategory)
      : portfolioItems.filter(item => {
        const service = services.find(s => s.id === item.category);
        return service && service.category.toLowerCase() === activeCategory.toLowerCase();
      });

  if (loading) return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <SkeletonLoader />
    </div>
  );

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-charcoal via-slate-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan/20 to-slate-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-gradient/20 to-terracotta/20 backdrop-blur-sm border border-gold-gradient/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Award className="w-5 h-5 text-gold-gradient" />
              <span className="text-gold-gradient font-bold text-sm tracking-wider">AWARD-WINNING STUDIO</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-6 leading-tight animate-fade-in-up">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">KGILL+</span>
              <span className="block bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta bg-clip-text text-transparent mt-2">STUDIO</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 font-inter mb-4 max-w-3xl mx-auto animate-fade-in-up-delayed leading-relaxed">
              Where <span className="text-gold-gradient font-bold">Moments</span> Become <span className="text-cyan font-bold">Masterpieces</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up-delayed">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta text-charcoal font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/50"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Camera className="w-6 h-6" />
                  <span>Book Your Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta via-marigold to-gold-gradient-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate-900 to-black relative overflow-x-hidden" id="services-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white italic uppercase mb-6">Capture Your <span className="text-gold-gradient-start">Story</span></h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 ${activeService === service.id
                  ? 'bg-gold-gradient text-charcoal shadow-2xl scale-105 border-transparent'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                onClick={() => setActiveService(activeService === service.id ? 'all' : service.id)}
              >
                <div className={activeService === service.id ? 'text-charcoal' : 'text-gold-gradient-start'}>
                  {iconMap[service.id] || <Camera className="w-6 h-6" />}
                </div>
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {activeService !== 'all' && (
            <div className="relative z-20 bg-slate-900/80 backdrop-blur-xl border border-gold-gradient/30 rounded-[40px] p-8 md:p-12 mb-16 animate-fade-in shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-gradient-start/5 rounded-full blur-3xl -z-10"></div>
              <button
                onClick={() => setActiveService('all')}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all"
              >
                <X className="w-8 h-8" />
              </button>
              {services.map(service => activeService === service.id && (
                <div key={service.id} className="max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gold-gradient/20 flex items-center justify-center text-gold-gradient-start">
                          {iconMap[service.id] || <Camera className="w-8 h-8" />}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-white italic uppercase">{service.title}</h3>
                          <p className="text-gold-gradient-start font-bold uppercase tracking-widest text-xs">{service.category}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8 font-inter">{service.details}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((f: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 text-gray-400 p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
                            <div className="w-2.5 h-2.5 rounded-full bg-gold-gradient-start animate-pulse shadow-[0_0_10px_rgba(255,179,71,0.5)]"></div>
                            <span className="font-medium">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-1/3">
                      <h4 className="text-xl font-black text-white italic uppercase mb-6 tracking-widest border-b border-white/10 pb-2">Pricing Tiers</h4>
                      <div className="space-y-4">
                        {(packages.find(p => p.serviceId === service.id)?.packages || []).map((pkg: any) => (
                          <div key={pkg.id} className="p-6 bg-charcoal/50 border border-white/10 rounded-3xl hover:border-gold-gradient-start/50 transition-all group/pkg">
                            <h5 className="text-lg font-bold text-white mb-1">{pkg.name}</h5>
                            <p className="text-2xl font-black text-gold-gradient-start mb-4">{pkg.price}</p>
                            <button
                              onClick={() => {
                                setBookingService(service.title);
                                setBookingPackage(pkg.name);
                                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="w-full py-3 bg-white/5 group-hover/pkg:bg-gold-gradient group-hover/pkg:text-charcoal rounded-xl text-sm font-black uppercase tracking-widest transition-all"
                            >
                              Select Package
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-24 bg-charcoal" id="portfolio-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white italic uppercase">Our <span className="text-gold-gradient-start">Work</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest mt-2">Finest Captures & Cinematic Stories</p>
            </div>

            <div className="flex bg-[#0f0f12]/80 backdrop-blur-xl p-1 border border-white/5 rounded-2xl overflow-x-auto no-scrollbar">
              {['all', ...Array.from(new Set(portfolioItems.map(i => i.category)))].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-gold-gradient text-charcoal' : 'text-gray-500 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.length === 0 ? (
              <div className="col-span-full py-20 text-center text-gray-500 font-bold uppercase tracking-[0.2em] bg-white/5 rounded-[40px] border border-dashed border-white/10">
                No captures in this category yet
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-crosshair shadow-lg"
                  onClick={() => { setSelectedImage(item); setShowModal(true); }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-gold-gradient-start text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.type}</p>
                    <h3 className="text-xl font-bold text-white line-clamp-1">{item.title}</h3>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-charcoal" id="contact-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white italic uppercase mb-4">Ready to <span className="text-gold-gradient-start">Book?</span></h2>
            <p className="text-gray-400 font-inter">Tell us about your project and we'll help bring it to life. {bookingService ? `Interested in: ${bookingService} (${bookingPackage})` : ''}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setShowModal(false)}></div>
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/60 to-transparent">
              <p className="text-gold-gradient-start font-black uppercase tracking-widest text-xs mb-2">{selectedImage.type} • {selectedImage.year}</p>
              <h3 className="text-3xl font-black text-white italic uppercase">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyVideographyPg;