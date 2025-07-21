import React from "react";

type InfoCardProps = {
  title?: string;
  content: string;
  color?: "green" | "brown";
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  color = "green",
}) => {
  const colorClasses = { green: "bg-green-600", brown: "bg-stone-600" };
  return (
    <div
      className={`p-6 rounded-lg text-white shadow-md h-full ${colorClasses[color]}`}
    >
      {title && <h4 className="font-bold text-lg mb-2">{title}</h4>}
      <p className="text-sm leading-normal">{content}</p>
    </div>
  );
};

export default InfoCard;
