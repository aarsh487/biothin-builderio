import React from "react";
import Image from "next/image";

type IconBlock = {
  icon: string;
  text: string;
};

type ProblemBlockProps = {
  label: string;
  headline: string;
  headlineColor?: string;
  ctaText: string;
  ctaUrl: string;
  icons: IconBlock[];
};

export const ProblemBlock: React.FC<ProblemBlockProps> = ({
  label,
  headline,
  headlineColor = "#F59E0B",
  ctaText,
  ctaUrl,
  icons = [],
}) => {
  return (
    <div className="max-w-full mx-auto py-16 flex flex-col lg:flex-row justify-center items-end gap-30">
      <div className="flex flex-col items-start gap-6">
        <div className="max-w-lg ">
          <p className="text-gray-700 text-2xl">{label}</p>
          <h2
            className="text-4xl tracking-tight font-extrabold leading-snug"
            style={{ color: headlineColor }}
          >
            {headline}
          </h2>
        </div>
        <a
          href={ctaUrl}
          className="bg-[#F59E0B] text-white text-sm font-semibold px-12 py-3"
        >
          {ctaText}
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-18 gap-y-20 max-w-sm">
        {icons &&
          icons.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center max-w-[100px] text-center gap-3"
            >
              <div className="w-10 h-10 relative">
                <Image src={item.icon} alt="" fill className="object-contain" />
              </div>
              <p className="text-sm text-gray-800 leading-tight">{item.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
