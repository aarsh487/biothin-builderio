import React from 'react';
import Link from 'next/link';
import { Heart, Share2 } from 'lucide-react';

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

const RelatedPosts: React.FC<PostListProps> = ({ posts = [] }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-20 py-12">
            <h2 className="text-2xl font-bold mb-8 text-[#F9C342]">ANDERE STIMMEN ZU DIESEM THEMA.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts && posts.map((post, idx) => {
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
                            className="rounded border overflow-hidden bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full aspect-[8/7] object-cover object-top"
                            />

                            <div
                                className="px-4 py-4 text-gray-900 flex flex-col justify-between"
                                style={{ backgroundColor: bgColor }}
                            >
                                <div className="flex items-center gap-3 text-sm mb-2">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#F9C342]">
                                        {avatarLetter}
                                    </div>
                                    <div>
                                        <div className="font-medium underline text-[#565655]">{author.name}</div>
                                        <div className='text-[#565655] underline'>{author.role}</div>
                                        <Link
                                            href={`/category/${tag?.tag?.toLowerCase()}`}
                                            className="underline text-blue-800"
                                        >
                                            {tag?.tag}
                                        </Link>
                                    </div>
                                </div>

                                <p className="text-sm mt-2 mb-3 line-clamp-3">{post.excerpt}</p>

                                <div className="flex justify-between items-center text-sm text-gray-800">
                                    <div className="flex items-center gap-3">
                                        <Heart size={16} />
                                        <Share2 size={16} />
                                    </div>
                                    <Link
                                        href={`/post/${post.slug}`}
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
        </div>
    );
};

export default RelatedPosts;
