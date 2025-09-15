import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CommunityHeroProps {
  text?: string;
  image?: string;
  className?: string;
}

const CommunityHero: React.FC<CommunityHeroProps> = ({
  text = "Von Anderen Lernen",
  image,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative flex flex-col sm:flex-row items-center sm:items-stretch sm:justify-between overflow-hidden",
        className
      )}
    >
      {image && (
        <Image
          src={image}
          fill
          alt="Community Hero"
          className="object-cover w-full h-full absolute inset-0"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-medium via-medium/60 to-transparent" />

      <div className="relative z-10 p-6 sm:p-12 max-w-sm">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight uppercase text-white">
          {text}
        </h2>
      </div>

      {/* <div className="flex-1" /> */}
    </section>
  );
};

export default CommunityHero;
