import React from "react";

interface InfoCardProps {
  imageSrc: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageSrc, text }) => {
  const imageStyle: React.CSSProperties = {
    margin: "20px",
    width: "150px", // Set the fixed width
    height: "150px", // Set the fixed height
    borderRadius: "50%", // Make the image a circle
    objectFit: "cover", // Ensure the image covers the area without stretching
  };

  return (
    <div className="card flex flex-col justify-center items-center p-6">
      <img src={imageSrc} alt={text} style={imageStyle} />
      <div className="card-text text-vibranium text-4xl font-bold">{text}</div>
    </div>
  );
};

export default InfoCard;
