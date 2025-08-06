import React from "react";
import Image from "next/image";

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
    <div className="w-full mx-auto px-[100px] py-16 bg-[#F5F5F5]">
      <div className="flex justify-center gap-6 mb-10">
        {testimonials.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded-sm px-6 py-4 w-[372px] h-[180px] flex flex-col"
          >
            <p className="text-sm text-gray-800">{item.quote}</p>
            <div className="mt-4 text-sm text-gray-700">
              <div className="flex items-center mb-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>{index < item.rating ? "⭐" : "☆"}</span>
                ))}
              </div>
              <p>{item.author}</p>
              <a
                href={item.linkUrl}
                className="text-sm text-[#1E40AF] underline"
              >
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 my-6" />

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
        <a
          href={ctaUrl}
          className="bg-[#F59E0B] text-white px-16 py-3 font-semibold text-sm"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};
