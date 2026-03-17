import React from 'react';
import Card from './card/card'; // Заходимо в папку card, потім беремо файл card

const Main = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((item) => (
        <Card 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          image={item.image} 
        />
      ))}
    </div>
  );
};

export default Main;