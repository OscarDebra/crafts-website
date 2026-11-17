import './App.css';
import { Card } from "./components/Card";
import { FurnPage } from './components/FurnPage';
import { cards } from "./data/Cards";
import { Routes, Route } from 'react-router-dom';

function CardList() {
  return (
    <div className="App">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.short_description}
          image={card.main_image}
          link={`/cards/${card.id}`}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/cards/:id" element={<FurnPage />} />
      </Routes>
    </div>
  );
}

export default App;