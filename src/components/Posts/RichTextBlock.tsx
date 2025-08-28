import React from 'react';

interface RichTextBlockProps {
  content?: string;
}

const RichTextBlock: React.FC<RichTextBlockProps> = ({ content }) => {
  return (
    <div className="prose max-w-4xl px-20 text-dark">
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    </div>
  );
};

export default RichTextBlock;