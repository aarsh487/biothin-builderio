import React from "react";
import Image from "next/image";

type Button = {
  text: string;
  url: string;
  backgroundColor: string;
  textColor: string;
};

type BundleTeaserProps = {
  badgeText: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
  productImage: string;
  title: string;
  buttons?: Button[];
  ctaText: string;
  ctaUrl: string;
};

export const BundleTeaser: React.FC<BundleTeaserProps> = ({
  badgeText,
  badgeBgColor = "#F59E0B",
  badgeTextColor = "#FFFFFF",
  productImage,
  title,
  buttons = [],
  ctaText,
  ctaUrl,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-end max-w-6xl w-full mx-auto py-10 px-4">
      <div className="relative flex flex-col">
        <div
          className="absolute text-sm max-w-[100px] font-bold top-8 left-8 p-2 z-10 ml-[117px]"
          style={{
            backgroundColor: badgeBgColor,
            color: badgeTextColor,
          }}
        >
          {badgeText}
        </div>
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
        <h2 className="text-2xl leading-6 font-bold uppercase text-[#F59E0B]">{title}</h2>

        <div className="flex flex-wrap gap-2">
          {buttons && buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.url}
              className="px-6 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: btn.backgroundColor,
                color: btn.textColor,
              }}
            >
              {btn.text}
            </a>
          ))}
        </div>

        <a
          href={ctaUrl}
          className="mt-2 px-20 py-2 uppercase rounded-sm font-semibold text-sm bg-[#dddddd] text-[#4A4A4A]"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};
