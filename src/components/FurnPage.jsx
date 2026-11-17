import { useParams, Link } from "react-router-dom";
import { cards } from "../data/Cards";
import { Carousel } from './Carousel.jsx';
import { getCardImages } from '../utils/imageLoader';

function Section({ title, description, images }) {
  if (!description && (!images || images.length === 0)) return null;

  return (
  <section>
    <h2>{title}</h2>
    <Carousel images={images} />
    <p>{description}</p>
  </section>
  );
}

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
      <h1>{card.title}</h1>
      <div>
        <Section
        images={getCardImages(card.id, 'after')}
        title="Final product"
        description={card.after_description}
        />

        <Section
          images={getCardImages(card.id, 'before')}
          title="Before reworking"
          description={card.before_description}
        />

      </div>
    </div>
  );
}