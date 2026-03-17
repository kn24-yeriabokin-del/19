import React from 'react';
import Main from './components/main';

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж.",
    image: "https://picsum.photos/200/150"
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з вогнями.",
    image: "https://picsum.photos/200/151"
  }
];

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Мої картки</h1>
      <Main data={cardsData} />
    </div>
  );
}

export default App;