import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  image: string;
  quote: string;
  reverse?: boolean;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ image, quote, reverse }) => {
  if (!image || !quote) {
    return (
      <Card className="bg-destructive/10 border-destructive text-destructive text-center p-4">
        Quote block is missing image or quote text.
      </Card>
    );
  }

  return (
    <Card className="my-8">
      <CardContent
        className={cn(
          "flex flex-col md:flex-row gap-6 items-center px-6 py-8",
          reverse && "md:flex-row-reverse"
        )}
      >
        <div className="w-full md:w-1/2">
          <AspectRatio ratio={1}>
            <Image
              src={image}
              alt="Quote source"
              fill
              className="rounded-lg object-cover shadow-md"
            />
          </AspectRatio>
        </div>

        <div className="w-full md:w-1/2 flex items-center">
          <blockquote className="text-xl italic font-medium relative pl-8 text-dark">
            <span className="absolute -top-4 left-0 text-6xl font-bold">
              ”
            </span>
            <div
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: quote }}
            />
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteBlock;
