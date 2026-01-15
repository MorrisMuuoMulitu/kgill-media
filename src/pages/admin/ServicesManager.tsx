import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import {
    Plus,
    Briefcase,
    Edit2,
    Trash2,
    X,
    Loader2,
    Package,
    ChevronDown,
    ChevronUp,
    PlusCircle
} from 'lucide-react';
import ConfirmDialog from '../../components/admin/ConfirmDialog';

interface Service {
    id: string;
    category: string;
    title: string;
    icon: string;
    description: string;
    features: string[];
    details: string;
}

interface ServicePackage {
    id: number;
    service_id: string;
    name: string;
    price: string;
    features: string[];
}

const ServicesManager = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [packages, setPackages] = useState<ServicePackage[]>([]);
    const [loading, setLoading] = useState(true);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
    const [expandedService, setExpandedService] = useState<string | null>(null);

    const [editingService, setEditingService] = useState<Service | null>(null);
    const [editingPackage, setEditingPackage] = useState<ServicePackage | null>(null);
    const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

    // Delete Confirmation State
    const [deleteConfirm, setDeleteConfirm] = useState<{
        isOpen: boolean;
        type: 'service' | 'package';
        id: string | number | null;
        title: string;
    }>({
        isOpen: false,
        type: 'service',
        id: null,
        title: ''
    });

    // Service Form State
    const [serviceFormData, setServiceFormData] = useState({
        id: '',
        category: '',
        title: '',
        description: '',
        details: '',
        features: [] as string[]
    });

    // Package Form State
    const [packageFormData, setPackageFormData] = useState({
        name: '',
        price: '',
        features: [] as string[]
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const [{ data: servicesData }, { data: packagesData }] = await Promise.all([
            supabase.from('services').select('*').order('title'),
            supabase.from('packages').select('*').order('id')
        ]);

        if (servicesData) setServices(servicesData);
        if (packagesData) setPackages(packagesData);
        setLoading(false);
    };

    const handleServiceSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (editingService) {
            await supabase.from('services').update(serviceFormData).eq('id', editingService.id);
        } else {
            await supabase.from('services').insert([serviceFormData]);
        }

        setIsServiceModalOpen(false);
        setEditingService(null);
        fetchData();
    };

    const handlePackageSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...packageFormData,
            service_id: activeServiceId
        };

        if (editingPackage) {
            await supabase.from('packages').update(payload).eq('id', editingPackage.id);
        } else {
            await supabase.from('packages').insert([payload]);
        }

        setIsPackageModalOpen(false);
        setEditingPackage(null);
        fetchData();
    };

    const deleteService = async (id: string) => {
        setLoading(true);
        await supabase.from('services').delete().eq('id', id);
        await fetchData();
        setLoading(false);
    };

    const deletePackage = async (id: number) => {
        setLoading(true);
        await supabase.from('packages').delete().eq('id', id);
        await fetchData();
        setLoading(false);
    };

    const openServiceDeleteConfirm = (service: Service) => {
        setDeleteConfirm({
            isOpen: true,
            type: 'service',
            id: service.id,
            title: service.title
        });
    };

    const openPackageDeleteConfirm = (pkg: ServicePackage) => {
        setDeleteConfirm({
            isOpen: true,
            type: 'package',
            id: pkg.id,
            title: pkg.name
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-montserrat font-black text-white italic">
                        SERVICES <span className="text-gold-gradient-start">MANAGER</span>
                    </h1>
                    <p className="text-gray-400 font-inter">Manage your service offerings and pricing tiers.</p>
                </div>
                <button
                    onClick={() => {
                        setEditingService(null);
                        setServiceFormData({ id: '', category: '', title: '', description: '', details: '', features: [] });
                        setIsServiceModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-gold-gradient text-charcoal font-black px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-gold-gradient-start/30 transition-all"
                >
                    <Plus className="w-5 h-5" />
                    <span>ADD NEW SERVICE</span>
                </button>
            </div>

            {/* Services List */}
            <div className="space-y-6">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-500 font-inter">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p>Loading services...</p>
                    </div>
                ) : (
                    services.map((service) => (
                        <div key={service.id} className="bg-[#0f0f12]/80 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden transition-all">
                            <div
                                className="p-8 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-gradient-start/20 to-terracotta/20 flex items-center justify-center border border-gold-gradient-start/30">
                                        <Briefcase className="w-6 h-6 text-gold-gradient-start" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                        <p className="text-gray-500 font-semibold uppercase text-xs tracking-widest">{service.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="hidden md:flex flex-col items-end mr-4">
                                        <span className="text-white font-bold">{packages.filter(p => p.service_id === service.id).length}</span>
                                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Packages</span>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEditingService(service);
                                            setServiceFormData({
                                                id: service.id,
                                                category: service.category,
                                                title: service.title,
                                                description: service.description,
                                                details: service.details,
                                                features: service.features
                                            });
                                            setIsServiceModalOpen(true);
                                        }}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openServiceDeleteConfirm(service);
                                        }}
                                        className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-xl text-red-400/70 hover:text-red-400 transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    {expandedService === service.id ? <ChevronUp className="w-6 h-6 text-gray-500" /> : <ChevronDown className="w-6 h-6 text-gray-500" />}
                                </div>
                            </div>

                            {expandedService === service.id && (
                                <div className="px-8 pb-8 pt-4 border-t border-white/5 animate-slide-down">
                                    <div className="mb-10 lg:grid lg:grid-cols-2 lg:gap-12">
                                        <div>
                                            <h4 className="text-xs uppercase font-black text-gold-gradient-start mb-4 tracking-widest">Description</h4>
                                            <p className="text-gray-400 font-inter mb-6 leading-relaxed">{service.description}</p>

                                            <h4 className="text-xs uppercase font-black text-gold-gradient-start mb-4 tracking-widest">Main Features</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.features.map((f, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-medium">{f}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xs uppercase font-black text-gold-gradient-start mb-4 tracking-widest">Extended Details</h4>
                                            <p className="text-gray-400 font-inter text-sm leading-relaxed">{service.details}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                                <Package className="w-5 h-5 text-gold-gradient-start" />
                                                Pricing Packages
                                            </h4>
                                            <button
                                                onClick={() => {
                                                    setActiveServiceId(service.id);
                                                    setEditingPackage(null);
                                                    setPackageFormData({ name: '', price: '', features: [] });
                                                    setIsPackageModalOpen(true);
                                                }}
                                                className="flex items-center gap-2 text-gold-gradient-start hover:text-white transition-colors text-sm font-bold"
                                            >
                                                <PlusCircle className="w-4 h-4" /> Add Package
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {packages.filter(p => p.service_id === service.id).map((pkg) => (
                                                <div key={pkg.id} className="p-6 bg-[#16161a] border border-white/5 rounded-2xl relative group">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h5 className="text-lg font-bold text-white">{pkg.name}</h5>
                                                        <div className="flex gap-2">
                                                            <button onClick={() => {
                                                                setActiveServiceId(service.id);
                                                                setEditingPackage(pkg);
                                                                setPackageFormData({ name: pkg.name, price: pkg.price, features: pkg.features });
                                                                setIsPackageModalOpen(true);
                                                            }} className="p-1.5 hover:bg-white/5 rounded text-gray-500 hover:text-white transition-colors">
                                                                <Edit2 className="w-3.5 h-3.5" />
                                                            </button>
                                                            <button onClick={() => openPackageDeleteConfirm(pkg)} className="p-1.5 hover:bg-white/5 rounded text-gray-500 hover:text-red-400 transition-colors">
                                                                <Trash2 className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="text-2xl font-black text-gold-gradient-start mb-4">{pkg.price}</p>
                                                    <ul className="space-y-2">
                                                        {pkg.features.map((f, i) => (
                                                            <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                                                                <div className="w-1 h-1 rounded-full bg-gold-gradient-start"></div> {f}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Service Modal */}
            {isServiceModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#0a0a0c]/80 backdrop-blur-md" onClick={() => setIsServiceModalOpen(false)}></div>
                    <div className="relative w-full max-w-2xl bg-[#0f0f12] border border-white/10 rounded-[40px] p-10 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-black text-white italic mb-8">
                            {editingService ? 'EDIT' : 'ADD'} <span className="text-gold-gradient-start">SERVICE</span>
                        </h2>
                        <form onSubmit={handleServiceSave} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Unique ID (e.g., 'wedding')</label>
                                    <input
                                        type="text" required value={serviceFormData.id} disabled={!!editingService}
                                        onChange={(e) => setServiceFormData({ ...serviceFormData, id: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 disabled:opacity-50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Category</label>
                                    <input
                                        type="text" required value={serviceFormData.category}
                                        onChange={(e) => setServiceFormData({ ...serviceFormData, category: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50"
                                    />
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Title</label>
                                    <input
                                        type="text" required value={serviceFormData.title}
                                        onChange={(e) => setServiceFormData({ ...serviceFormData, title: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50"
                                    />
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Description (Short)</label>
                                    <textarea
                                        required value={serviceFormData.description}
                                        onChange={(e) => setServiceFormData({ ...serviceFormData, description: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 resize-none h-20"
                                    ></textarea>
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Extended Details</label>
                                    <textarea
                                        required value={serviceFormData.details}
                                        onChange={(e) => setServiceFormData({ ...serviceFormData, details: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 resize-none h-32"
                                    ></textarea>
                                </div>
                                <div className="col-span-full space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase ml-1">Features (Comma separated)</label>
                                    <input
                                        type="text"
                                        value={serviceFormData.features.join(', ')}
                                        onChange={(e) => setServiceFormData({ ...serviceFormData, features: e.target.value.split(',').map(s => s.trim()) })}
                                        placeholder="Feature 1, Feature 2, Feature 3"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-4 mt-6">SAVE SERVICE</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Package Modal */}
            {isPackageModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#0a0a0c]/80 backdrop-blur-md" onClick={() => setIsPackageModalOpen(false)}></div>
                    <div className="relative w-full max-w-lg bg-[#0f0f12] border border-white/10 rounded-[40px] p-10 shadow-2xl animate-scale-in">
                        <h2 className="text-2xl font-black text-white italic mb-8">
                            {editingPackage ? 'EDIT' : 'ADD'} <span className="text-gold-gradient-start">PACKAGE</span>
                        </h2>
                        <form onSubmit={handlePackageSave} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase ml-1">Package Name</label>
                                <input
                                    type="text" required value={packageFormData.name}
                                    onChange={(e) => setPackageFormData({ ...packageFormData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase ml-1">Price (e.g., 'Ksh 50,000')</label>
                                <input
                                    type="text" required value={packageFormData.price}
                                    onChange={(e) => setPackageFormData({ ...packageFormData, price: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase ml-1">Package Features (Comma separated)</label>
                                <textarea
                                    required value={packageFormData.features.join(', ')}
                                    onChange={(e) => setPackageFormData({ ...packageFormData, features: e.target.value.split(',').map(s => s.trim()) })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-gold-gradient-start/50 resize-none h-32"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gold-gradient text-charcoal font-black rounded-2xl py-4 mt-6 uppercase tracking-wider">Save Package</button>
                        </form>
                    </div>
                </div>
            )}
            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirm.isOpen}
                title={deleteConfirm.type === 'service' ? "Delete Service?" : "Delete Package?"}
                message={deleteConfirm.type === 'service'
                    ? `Are you sure you want to delete "${deleteConfirm.title}" and all its pricing tiers? This action cannot be undone.`
                    : `Are you sure you want to delete the "${deleteConfirm.title}" pricing tier? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                isDangerous={true}
                onConfirm={() => {
                    if (deleteConfirm.id) {
                        if (deleteConfirm.type === 'service') {
                            deleteService(deleteConfirm.id as string);
                        } else {
                            deletePackage(deleteConfirm.id as number);
                        }
                    }
                }}
                onCancel={() => setDeleteConfirm({ ...deleteConfirm, isOpen: false })}
            />
        </div>
    );
};

export default ServicesManager;
