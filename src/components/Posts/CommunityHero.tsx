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
        "flex flex-col sm:flex-row items-center sm:items-stretch sm:justify-between bg-medium text-white overflow-hidden relative",
        className
      )}
    >
      <div className="p-6 sm:p-12 max-w-lg flex-1 justify-end relative z-10">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight uppercase">
          {text}
        </h2>
      </div>

      {image && (
        <div className="flex-1 w-full h-64 sm:h-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-medium via-medium/10 to-transparent pointer-events-none" />
          <Image
            src={image}
            alt="Community Hero"
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </section>
  );
};

export default CommunityHero;
