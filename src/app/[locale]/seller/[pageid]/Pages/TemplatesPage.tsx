'use client';
import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Star, Eye, Download, Tag, Palette, Layout } from 'lucide-react';

interface TemplateTypes {
    id: string;
    title: string;
    category: string;
    price: number;
    images: string[];
    colors: string[];
    tags: string[];
    rating: number;
    downloads: number;
    preview: string;
    isPro: boolean;
}
// Mock data for templates
const TEMPLATE_CATEGORIES = [
    'All Templates',
    'Landing Pages',
    'Dashboards',
    'E-commerce',
    'Portfolios',
    'Blogs',
    'SaaS',
    'Mobile Apps'
];

const FAKE_TEMPLATES = [
    {
        id: '1',
        title: 'Modern SaaS Dashboard',
        category: 'Dashboards',
        price: 49.99,
        images: [
            'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
            'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
        ],
        colors: ['#3B82F6', '#10B981', '#F59E0B'],
        tags: ['React', 'Tailwind', 'Dark Mode'],
        rating: 4.8,
        downloads: 1234,
        preview: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
        isPro: false
    },
    {
        id: '2',
        title: 'E-commerce Store Template',
        category: 'E-commerce',
        price: 79.99,
        images: [
            'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
            'https://images.pexels.com/photos/6347727/pexels-photo-6347727.jpeg'
        ],
        colors: ['#EC4899', '#8B5CF6', '#06B6D4'],
        tags: ['Next.js', 'Stripe', 'Responsive'],
        rating: 4.9,
        downloads: 856,
        preview: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
        isPro: true
    },
    {
        id: '3',
        title: 'Creative Portfolio',
        category: 'Portfolios',
        price: 29.99,
        images: [
            'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
            'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg'
        ],
        colors: ['#F97316', '#EF4444', '#84CC16'],
        tags: ['Framer Motion', 'GSAP', 'Creative'],
        rating: 4.7,
        downloads: 642,
        preview: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
        isPro: false
    },
    {
        id: '4',
        title: 'Startup Landing Page',
        category: 'Landing Pages',
        price: 39.99,
        images: [
            'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
            'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
        ],
        colors: ['#6366F1', '#14B8A6', '#F59E0B'],
        tags: ['TypeScript', 'Optimized', 'SEO'],
        rating: 4.6,
        downloads: 973,
        preview: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        isPro: false
    },
    // Add more templates as needed
];

function TemplateCard({ template }: { template: TemplateTypes }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="group relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Pro Badge */}
            {template.isPro && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    PRO
                </div>
            )}

            {/* Template Preview */}
            <div className="relative h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${template.images[currentImage]})` }}
                />
                
                {/* Overlay with actions */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Eye size={18} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Download size={18} />
                    </button>
                </div>

                {/* Image navigation dots */}
                {template.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {template.images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImage(idx)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    idx === currentImage ? 'bg-white' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Template Info */}
            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-neutral-900 dark:text-white line-clamp-1">
                        {template.title}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-medium">{template.rating}</span>
                    </div>
                </div>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    {template.category}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {template.tags.slice(0, 3).map((tag, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded-full"
                        >
                            <Tag size={10} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-3">
                    <Palette size={14} className="text-neutral-400" />
                    <div className="flex gap-1">
                        {template.colors.map((color, idx) => (
                            <div
                                key={idx}
                                className="w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600"
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>

                {/* Price and Downloads */}
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-neutral-900 dark:text-white">
                        ${template.price}
                    </div>
                    <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                        <Download size={14} />
                        {template.downloads.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeaderSeller() {
    return (
        <header className="w-full border-b dark:border-neutral-800 border-neutral-200 flex justify-between items-center p-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Templates</h1>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                    {FAKE_TEMPLATES.length} Templates
                </span>
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                    <Layout size={20} className="text-neutral-600 dark:text-neutral-400" />
                </button>
            </div>
        </header>
    );
}

export default function TemplatesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Templates');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popular');

    const filteredTemplates = useMemo(() => {
        let filtered = FAKE_TEMPLATES;

        // Filter by category
        if (selectedCategory !== 'All Templates') {
            filtered = filtered.filter(template => template.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(template => 
                template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Sort templates
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'downloads':
                filtered.sort((a, b) => b.downloads - a.downloads);
                break;
            default: // popular
                filtered.sort((a, b) => b.downloads - a.downloads);
        }

        return filtered;
    }, [searchQuery, selectedCategory, sortBy]);

    return (
        <main className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <HeaderSeller />
            
            {/* Filters and Search */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            {TEMPLATE_CATEGORIES.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="downloads">Most Downloads</option>
                        </select>

                        {/* View Mode */}
                        <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-colors ${
                                    viewMode === 'grid' 
                                        ? 'bg-white dark:bg-neutral-700 shadow-sm' 
                                        : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                }`}
                            >
                                <Grid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-colors ${
                                    viewMode === 'list' 
                                        ? 'bg-white dark:bg-neutral-700 shadow-sm' 
                                        : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                }`}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Templates Grid */}
            <section className="p-6">
                {filteredTemplates.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">No templates found</h3>
                        <p className="text-neutral-500 dark:text-neutral-400">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className={`grid gap-6 ${
                        viewMode === 'grid' 
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                            : 'grid-cols-1'
                    }`}>
                        {filteredTemplates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}