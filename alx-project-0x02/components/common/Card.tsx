import React from 'react';
import { CardProps } from '../../interfaces';
const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
        </div>
     </div>
  )
}

export default Card;