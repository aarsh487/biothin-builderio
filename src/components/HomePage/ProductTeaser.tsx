import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProductTeaserProps = {
  headline: string;
  headlineColor?: string;
  ctaText: string;
  ctaUrl: string;
  ctaBgColor?: string;
  ctaTextColor?: string;
  productImage: string;
};

export const ProductTeaser: React.FC<ProductTeaserProps> = ({
  headline,
  headlineColor = "#F59E0B",
  ctaText,
  ctaUrl,
  ctaBgColor = "#F59E0B",
  ctaTextColor = "#FFFFFF",
  productImage,
}) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="bg-white px-16 pt-14 pb-8 flex flex-col md:flex-row justify-between items-start gap-10">
        
        <div className="max-w-xl flex flex-col items-start gap-6">
          <h2
            className="text-3xl font-extrabold leading-snug uppercase"
            style={{ color: headlineColor }}
          >
            {headline}
          </h2>

          <div className="flex gap-1">
            <div className="w-4 h-2 bg-dark" />
            <div className="w-2 h-2 bg-secondary" />
          </div>

          <Button
            asChild
            variant="custom"
            className={cn(
              "mt-4 text-sm font-semibold px-20 py-3 rounded-none"
            )}
            style={{
              backgroundColor: ctaBgColor,
              color: ctaTextColor,
            }}
          >
            <Link href={ctaUrl}>{ctaText}</Link>
          </Button>
        </div>

        <div className="relative w-full max-w-[600px]">
          <Image
            src={productImage}
            alt="Product Group"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
