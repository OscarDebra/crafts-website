import { useParams, Link } from "react-router-dom";
import { cards } from "../data/Cards";

export function FurnPage() {
  const { id } = useParams();
  const card = cards.find((c) => c.id === Number(id));
  
  if (!card) {
    return (
      <div>
        <p>Card not found.</p>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello</h1>
      <h1>{card.title}</h1>
    </div>
  );
}