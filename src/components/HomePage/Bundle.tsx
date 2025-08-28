import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonType = {
  text: string;
  url: string;
  variant?: "default" | "secondary" | "outline" | "destructive";
  rounded?: boolean;
  backgroundColor: string;
  textColor: string;

};

type BundleTeaserProps = {
  badgeText: string;
  badgeBg?: "bg-orange-500" | "bg-gray-800" | "bg-green-600";
  badgeTextColor?: "text-white" | "text-black";
  productImage: string;
  title: string;
  buttons?: ButtonType[];
  ctaText: string;
  ctaUrl: string;
};

export const BundleTeaser: React.FC<BundleTeaserProps> = ({
  badgeText,
  badgeBg = "bg-orange-500",
  badgeTextColor = "text-white",
  productImage,
  title,
  buttons = [],
  ctaText,
  ctaUrl,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-end max-w-6xl w-full mx-auto py-10 px-4">
      <div className="relative flex flex-col">
        <Badge
          className={cn(
            "absolute top-8 left-8 z-10 ml-[117px] font-bold text-sm max-w-[100px] p-2",
            badgeBg,
            badgeTextColor
          )}
        >
          {badgeText}
        </Badge>

        <div className="relative w-[220px] lg:w-[700px] aspect-[2/1]">
          <Image
            src={productImage}
            alt="Product Bundle"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start text-left max-w-xl w-full">
        <h2 className="text-2xl text-orange-color leading-6 font-bold uppercase">
          {title}
        </h2>

        <div className="flex flex-wrap gap-2">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              asChild
              variant="custom"
              className="px-6 py-2 rounded-full font-semibold"
              style={{
                backgroundColor: btn.backgroundColor,
                color: btn.textColor,
              }}
            >
              <Link href={btn.url}>{btn.text}</Link>
            </Button>
          ))}
        </div>

        <Button
          asChild
          variant="secondary"
          className="mt-2 px-20 py-2 uppercase rounded-sm font-semibold text-sm bg-light text-medium"
        >
          <Link href={ctaUrl}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};
