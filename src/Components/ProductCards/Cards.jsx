// eslint-disable-next-line react/prop-types
const Cards = ({ title, price, img }) => {
  return (
    <a href="#" className="card">
      <div className="card-info">
        <h3 className="titleCard">{title}</h3>
        <p className="price-card">${price}</p>
        <img id="img-card" src={img} alt={title} />
        <button className="btn-carousel">Ver producto</button>
      </div>
    </a>
  );
};

export default Cards;
