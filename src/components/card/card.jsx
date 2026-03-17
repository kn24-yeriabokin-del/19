import React from 'react';
import './card.css'; // Переконайся, що назва файлу збігається (маленька чи велика літера)

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => alert(title)}>Дізнатися більше</button>
    </div>
  );
};

export default Card;