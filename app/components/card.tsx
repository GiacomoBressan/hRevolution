import React from 'react';

interface CardProps {
    imageSrc: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
    const imageStyle = {
        margin : '20px',
        width: '100px', // Set the fixed width
        height: '100px', // Set the fixed height
    };

    return (
        <div className="card flex flex-col justify-center items-center p-6">
            <img src={imageSrc} alt={text} style={imageStyle} />
            <div className="card-text text-white text-4xl font-bold">{text}</div>
        </div>
    );
};

export default Card;