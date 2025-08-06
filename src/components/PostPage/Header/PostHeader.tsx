import React from 'react';
import Image from 'next/image';
import { Heart, Share2 } from 'lucide-react';

interface Author {
  name: string;
  role: string;
  avatar?: string;
}

interface Tag {
  tag: string;
  color?: string;
}

interface PostHeaderProps {
  title: string;
  image: string;
  excerpt: string;
  author: Author;
  tag: Tag;
  likes?: number;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  image,
  excerpt,
  author,
  tag,
  likes = 7,
}) => {

  if (!title || !image || !excerpt || !author || !tag || !likes) {
    console.warn("no data for header");
  }
  return (
    <div className="relative w-full">
      =      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-white text-center">
          <blockquote className="text-xl md:text-2xl font-semibold max-w-3xl">
            <span className="text-4xl leading-none">“</span>
            {excerpt}
          </blockquote>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto -mt-10 relative z-10 px-4"
      >
        <div
          className="bg-[#F9C342] p-4 sm:p-5 rounded shadow-md"
        >
          <div className="flex items-center text-sm mb-1">
            {author && <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800 mr-2">
              {author.avatar ? (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              ) : (
                author.name.charAt(0)
              )}
            </div>}
          </div>

          <hr className="border-white/50 my-2" />

          <div className="flex justify-between text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <Heart /> 
              <p>{likes}</p>
            </div>
            <div className="text-xs uppercase flex items-center gap-1 tracking-wide font-semibold">
              <Share2 /> <p>Teilen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
