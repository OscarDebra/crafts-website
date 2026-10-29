import './App.css'
import { Card } from "./components/Card"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const cards = [
    {
        id: 1,
        title: "Card One",
        description: "This is the first card.",
        image: "https://picsum.photos/id/10/400/300",
        link: "/cards/1",
    },
    {
        id: 2,
        title: "Card Two",
        description: "This is the second card.",
        image: "https://picsum.photos/id/20/400/300",
        link: "/cards/2",
    },
    {
        id: 3,
        title: "Card Three",
        description: "This is the third card.",
        image: "https://picsum.photos/id/30/400/300",
        link: "/cards/3",
    },
];

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
