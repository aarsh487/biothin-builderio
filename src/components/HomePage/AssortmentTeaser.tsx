import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

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
        <h1 className="text-3xl font-bold text-medium mb-2">
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
          <div className="w-3 h-2 bg-dark" />
          <div className="w-3 h-2 bg-secondary" />
        </div>

        <div
          className="text-sm text-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />

        <Button asChild className="mt-4 text-xs font-semibold tracking-wide bg-orange-color">
          <Link href={buttonUrl}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};
