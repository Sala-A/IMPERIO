import Button from "../Common/Button";
import Data from "./Data.jsx";

export const Cards = () => {
  return (
    <div className="cards-container">
      {Data.map((product) => (
        <a href="#" className="card" key={product.id}>
          <div className="card-info">
            <h3 className="titleCard">{product.title}</h3>
            <p className="price-card">${product.price}</p>
            <img id="img-card" src={product.img} alt={product.title} />
            <Button />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Cards;