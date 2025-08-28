import React from "react";
import Image from "next/image";
import { Heart, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
  if (!title || !image || !excerpt || !author || !tag) {
    console.warn("Missing data for header");
  }

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute left-20 bottom-1/2 max-w-[450px] text-left text-dark">
          <blockquote className="text-2xl md:text-4xl font-semibold">
            <p className="text-4xl leading-none">“</p>
            <p>{excerpt}</p>
          </blockquote>
        </div>
      </div>

      <div className="max-w-6xl mx-auto -mt-10 relative z-10 px-4">
        <Card className="bg-yellow-color text-dark shadow-md">
          <CardContent className="p-4 sm:p-5">
         <div className="flex items-center text-sm mb-2">
              <Avatar className="w-6 h-6 mr-2 text-orange-color">
                {author.avatar ? (
                  <AvatarImage src={author.avatar} alt={author.name} />
                ) : (
                  <AvatarFallback>
                    {author.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <span>{author.name}</span>
            </div>

            <Separator className="my-2 bg-white" />

            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <p>{likes}</p>
              </div>
              <div className="flex items-center gap-1 uppercase tracking-wide font-semibold text-xs">
                <Share2 className="w-4 h-4" /> <p>Teilen</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostHeader;
