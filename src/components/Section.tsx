import React from "react";

interface SectionProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
}) => (
  <section className={`my-12 ${className}`}>
    {title && (
      <h2 className="text-3xl font-plus-jakarta-sans font-bold text-gray-800 mb-6">
        {title}
      </h2>
    )}
    {children}
  </section>
);

export default Section;
