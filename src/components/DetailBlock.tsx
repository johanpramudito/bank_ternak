// components/DetailBlock.tsx
import React from "react";

// Tipe props disederhanakan, tidak lagi memerlukan 'images'
interface DetailBlockProps {
  title?: string;
  content: string | string[];
  color?: "green" | "brown" | "dark" | "dark_green" | "red";
}

const DetailBlock: React.FC<DetailBlockProps> = ({ title, content, color }) => {
  const isList = Array.isArray(content);
  const colorClasses = {
    green: "bg-green-100 border-green-300 text-black",
    brown: "bg-stone-100 border-stone-300 text-black",
    dark: "bg-stone-700 text-white border-stone-600",
    dark_green: "bg-green-800 text-white border-green-700",
    red: "bg-[#7d302c] text-white border-stone-600",
  };

  // Komponen ini sekarang tidak memiliki padding atau border sendiri,
  // agar lebih fleksibel saat digunakan di layout yang berbeda.
  return (
    <div className={`z-0 p-6 rounded-xl ${color ? colorClasses[color] : ""}`}>
      {title && <h4 className="font-bold text-lg mb-3">{title}</h4>}
      {isList ? (
        <ul className="list-disc list-inside space-y-2">
          {content.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="leading-relaxed whitespace-pre-line">{content}</p>
      )}
    </div>
  );
};

export default DetailBlock;
