import React from "react";

interface ContentBlockProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, children }) => (
  <div className="mb-8">
    <h4 className="text-xl font-semibold text-gray-800 mb-2 font-plus-jakarta-sans">
      {title}
    </h4>
    <p className="text-gray-600 font-plus-jakarta-sans leading-relaxed whitespace-pre-line">
      {children}
    </p>
  </div>
);

export default ContentBlock;
