import "./Card.scss";
const Card = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        alt="product"
        src="http://placekitten.com/200/300"
      ></img>
      <div className="product-card__promo">
        <div className="product-card__promo__label">Sale</div>
      </div>
      <div className="product-card__info">
        <div className="product-card__info__name">Product name</div>
        <div className="product-card__info__price">$15.00</div>
      </div>
    </div>
  );
};

export default Card;