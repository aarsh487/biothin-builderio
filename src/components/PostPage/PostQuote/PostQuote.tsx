import React from 'react';
import Image from 'next/image';

interface QuoteBlockProps {
  image: string;
  quote: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ image, quote }) => {
  if (!image || !quote) {
    return (
      <div className="bg-red-100 p-4 text-red-700 text-center">
        Quote block is missing image or quote text.
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center my-8 px-20">
      <div className="w-full md:w-1/2 flex mb-4 md:mb-0">
        <Image
          src={image}
          alt="Quote source"
          width={400}
          height={400}
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center">
        <blockquote className="text-xl italic text-gray-800 relative pl-10">
          <span className="absolute top-0 left-0 text-5xl font-bold text-[#F59B00]">”</span>
         <div className='text-[#F59B00]' dangerouslySetInnerHTML={{ __html: quote }} />
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteBlock;