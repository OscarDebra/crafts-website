import './App.css'
import { Card } from "./components/Card"
import { FurnPage } from './components/FurnPage';
import { cards } from "./data/Cards"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function CardList() {
  return (
    <div className="App">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/cards/:id" element={<FurnPage />} />
    </Routes>
  );
}

export default App
