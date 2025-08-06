import React from "react";

type AssortmentTeaserProps = {
  brand: string;
  highlightColor?: string;
  headline: string;
  paragraph: string;
  buttonText: string;
  buttonUrl: string;
};

export const AssortmentTeaser: React.FC<AssortmentTeaserProps> = ({
  brand,
  highlightColor = "#F59E0B",
  headline,
  paragraph,
  buttonText,
  buttonUrl,
}) => {
  const brandSplit = brand.split("-");

  return (
    <div className="w-full mx-auto px-35 py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-[#333] mb-2">
          {brandSplit[0]}-
          <span style={{ color: highlightColor }}>{brandSplit[1]}</span>-
          {brandSplit[2]}
        </h1>

        <h2
          className="text-2xl max-w-lg font-extrabold uppercase leading-snug mb-4"
          style={{ color: highlightColor }}
        >
          {headline}
        </h2>

        <div className="flex gap-1 mb-6">
          <div className="w-3 h-2 bg-[#1A1446]" />
          <div className="w-3 h-2 bg-[#F59E0B]" />
        </div>

        <div
          className="text-sm text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />

        <a
          href={buttonUrl}
          className="inline-block bg-[#3A3A3A] text-white text-xs font-semibold px-4 py-2 tracking-wide"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
