import React from "react";
import Image from "next/image"; // Menggunakan Next.js Image untuk optimasi

interface DetailBlockProps {
  title?: string;
  content: string | string[];
  imageSrc?: string;
  color?: "green" | "brown" | "dark" | "dark_green";
}

const DetailBlock: React.FC<DetailBlockProps> = ({
  title,
  content,
  imageSrc,
  color,
}) => {
  const isList = Array.isArray(content);
  const colorClasses = {
    green: "bg-green-100 border-green-300",
    brown: "bg-stone-100 border-stone-300",
    dark: "bg-stone-700 text-white border-stone-600",
    dark_green: "bg-green-800 text-white border-green-700",
    red: "bg-red-600 text-white border-stone-600",
  };
  const baseClasses = "h-full";

  return (
    <div className={`${baseClasses} ${color ? colorClasses[color] : ""}`}>
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
      {imageSrc && (
        <div className="relative w-full h-48 mt-4 rounded-md shadow-md overflow-hidden">
          <Image
            src={imageSrc}
            alt={title || "Gambar Detail"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
};

export default DetailBlock;
