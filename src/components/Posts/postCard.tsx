"use client";

import { Variant } from "@/data/posts";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PostCardProps = {
  image?: string;
  author: string;
  role: string;
  category?: string;
  title: string;
  likes?: number;
  slug: string;
  variant?: Variant;
};

export function PostCard({
  image,
  author,
  role,
  category,
  title,
  likes = 0,
  slug,
  variant = "yellow",
}: PostCardProps) {
  const authorInitial = author.charAt(0).toUpperCase();
  const variantStyles: Record<Variant, string> = {
    yellow: 'bg-[#FDC531] text-black',
    blue: 'bg-[#2F3061] text-white',
    orange: 'bg-[#F59B00] text-white',
  }

  return (
    <Link
      href={`/post/${slug}`}
      className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition bg-white border border-gray-200"
    >
      {image && (
        <img src={image} alt={title} className="h-64 w-full object-cover" />
      )}

      <div
        className={cn(`flex flex-col p-4 text-sm`, variantStyles[variant])}
      >
        {/* Author Info with Avatar */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-orange-500 font-bold text-lg">
                {authorInitial}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">{role}</span>
            <span className="text-xs">
              {author} in{" "}
              <span className="underline font-medium">{category}</span>
            </span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed mb-4">{title}</p>

        {/* Footer with Interactions */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </div>
          </div>
          <span className="font-semibold underline cursor-pointer">
            weiterlesen
          </span>
        </div>
      </div>
    </Link>
  );
}
