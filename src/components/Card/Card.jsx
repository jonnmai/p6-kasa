import { Link } from "react-router-dom";
import Cards from "../../assets/db.json";
import "../Card/Card.scss";

function Card() {
  return (
    <section className="cards-container">
      <ul className="cards-list">
        {Cards.map((card) => (
            <li key={card.id} className="card">
              <Link to={`/logement/${card.id}`}>
                <figure className="house">
                  <img src={card.cover} alt={card.title} />
                  <figcaption className="house-caption">
                    <h3 className="house-title">{card.title}</h3>
                  </figcaption>
                </figure>
              </Link>
            </li>
        ))}
      </ul>
    </section>
  );
}

export default Card;
