import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

type Testimonial = {
  quote: string;
  rating: number;
  author: string;
  linkText: string;
  linkUrl: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  images: { image: string }[];
  ctaText: string;
  ctaUrl: string;
};

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = [],
  images = [],
  ctaText,
  ctaUrl,
}) => {
  return (
    <div className="w-full mx-auto px-[100px] py-16 bg-light">
      <div className="flex justify-center gap-6 mb-10">
        {testimonials.slice(0, 3).map((item, i) => (
          <Card key={i} className="w-[372px] h-[180px] shadow-sm">
            <CardContent className="flex flex-col p-6">
              <p className="text-sm text-medium">{item.quote}</p>
              <div className="mt-4 text-sm text-medium">
                <div className="flex items-center mb-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={cn(
                        index < item.rating
                          ? "fill-yellow-400 text-yellow-color"
                          : "text-light"
                      )}
                    />
                  ))}
                </div>
                <p>{item.author}</p>
                <a href={item.linkUrl} className="text-sm text-info underline">
                  {item.linkText}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <hr className="border-light my-6" />

      <div className="flex justify-center gap-6 items-center">
        {images.slice(0, 3).map((img, i) => (
          <div key={i} className="relative w-[378px] h-[210px]">
            <Image
              src={img.image}
              alt=""
              fill
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 ml-18">
        <Button asChild className="px-16 py-3 font-semibold text-sm bg-orange-color">
          <a href={ctaUrl}>{ctaText}</a>
        </Button>
      </div>
    </div>
  );
};
