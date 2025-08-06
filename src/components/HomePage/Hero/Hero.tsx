import React from "react";

interface RegistryBannerProps {
  image?: string | { url: string };
  text?: string;
  variant?: "hero" | "caption";
}

export const RegistryBanner: React.FC<RegistryBannerProps> = ({
  image,
  text = "GESUND\nIST SCHÖN.",
  variant = "hero",
}) => {
  const imageUrl = typeof image === "string" ? image : image?.url || "";

  if (variant === "caption") {
    return (
      <div className="relative w-full min-h-[400px] max-h-[500px] flex items-center justify-start overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
        )}
        <div className="w-full absolute bottom-10 left-150 items-end text-white py-8">
          <p className="font-bold text-7xl mb-2">„</p>
          <span className="text-2xl font-bold">{text}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[400px] max-h-[500px] flex items-center justify-start overflow-hidden bg-gradient-to-b from-gray-200 via-white to-gray-200">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative max-w-[400px] w-full z-20 pl-8 md:pl-16 top-20 flex flex-col justify-center h-full">
        {text.split("\n").map((line, idx) => (
          <span
            key={idx}
            className="block  text-white font-extrabold uppercase text-3xl md:text-5xl leading-tight tracking-wide drop-shadow-lg"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};
