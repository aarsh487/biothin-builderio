import React from 'react';

interface CommunityHeroProps {
  text?: string;
  image?: string;
}

const CommunityHero: React.FC<CommunityHeroProps> = ({ text = 'Von Anderen Lernen', image }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-[#4C4D35] text-white overflow-hidden">
      <div className="p-6 sm:p-12 max-w-md">
        <h2 className="text-7xl font-extrabold">{text}</h2>
      </div>
      {image && (
        <div className="w-full">
          <img src={image} alt="Community Hero" className="object-cover w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default CommunityHero;