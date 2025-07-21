import React from "react";

interface ContentBlockProps {
  children: React.ReactNode;
}

const QuoteBox: React.FC<ContentBlockProps> = ({ children }) => (
  <div className="bg-stone-700 text-white text-center p-8 my-12 mx-auto rounded-lg max-w-4xl shadow-xl">
    <p className="m-0 text-lg italic leading-relaxed">{children}</p>
  </div>
);

export default QuoteBox;
