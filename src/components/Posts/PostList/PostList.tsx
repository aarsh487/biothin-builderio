import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Heart, Search, Share2 } from 'lucide-react';

interface Post {
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    tags: { tag: string; color?: string }[];
    author?: {
        name: string;
        avatar?: string;
        role?: string;
    };
}

interface PostListProps {
    posts?: Post[];
    pageSize?: number;
}

const PostList: React.FC<PostListProps> = ({ posts = [], pageSize = 6 }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(pageSize);

    const allTags = useMemo(() => {
        const tagSet = new Set<string>();
        posts.forEach(post => {
            post.tags?.forEach(t => tagSet.add(t.tag));
        });
        return Array.from(tagSet);
    }, [posts]);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every(tag =>
                    post.tags?.some(t => t.tag.toLowerCase() === tag.toLowerCase())
                );

            return matchesSearch && matchesTags;
        });
    }, [posts, searchQuery, selectedTags]);

    const visiblePosts = filteredPosts.slice(0, visibleCount);

    return (
        <div className="max-w-screen-xl mx-auto px-20 py-12">
            <div className="relative mb-6">
                <span className="absolute left-1 top-3 text-[#F59B00]">
                    <Search size={40} />
                </span>
                <input
                    type="text"
                    placeholder="Thema suchen"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-0 border-b-2 border-[#F59B00] pl-14 py-4 focus:outline-none focus:border-orange-600 placeholder:text-[#F59B00] text-2xl"
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {allTags && allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() =>
                            setSelectedTags(prev =>
                                prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                            )
                        }
                        className={`px-3 py-1 rounded-full border text-sm ${selectedTags.includes(tag)
                            ? 'bg-orange-600 text-black'
                            : 'bg-gray-100 text-gray-700'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {visiblePosts && visiblePosts.map((post, idx) => {
                    const tag = post.tags?.[0];
                    const bgColor = tag?.color || '#F9C342';
                    const author = post.author ?? {
                        name: 'Caro',
                        role: 'Anwenderin',
                        avatar: '',
                    };

                    const avatarLetter = author.name.charAt(0).toUpperCase();

                    return (
                            <div
                                key={idx}
                                className="rounded border overflow-hidden h-full bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full aspect-[8/7] object-cover object-top"
                                />

                                <div
                                    className="px-4 py-4 max-h-[300px] h-full text-gray-900 flex flex-col"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <div className="flex items-center gap-3 text-sm mb-2">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#F9C342]">
                                            {avatarLetter}
                                        </div>
                                        <div>
                                            <div className="font-medium underline text-[#565655]">{author.name}</div>
                                            <div className='text-[#565655] underline'>{author.role}</div>
                                        </div>
                                    </div>

                                    <p className="text-sm mt-2 mb-3 line-clamp-3">{post.excerpt}</p>

                                    <div className="flex justify-between items-center text-sm text-gray-800">
                                        <div className="flex items-center gap-3">
                                            <Heart size={16} />
                                            <Share2 size={16} />
                                        </div>
                                        <Link
                                            href={`/post/${post?.slug}`}
                                            className="underline font-semibold text-blue-800 hover:text-blue-900"
                                        >
                                            weiterlesen
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    );
                })}
            </div>

            {visibleCount < filteredPosts.length && (
                <div className="mt-10">
                    <button
                        onClick={() => setVisibleCount(v => v + pageSize)}
                        className="px-20 py-2 text-[#F59B00] outline outline-[#F59B00] rounded-sm"
                    >
                        Mehr laden
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;
