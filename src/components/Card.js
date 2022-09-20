import "./Card.scss";
import Promotion from "./Promotion";
import ProductInfo from "./ProductInfo";

const Card = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        alt="product"
        src="http://placekitten.com/200/300"
      ></img>
      <div className="product-card__promo">
        {product.isSale && (
          <Promotion classNames={"onsale"} content="Sale"></Promotion>
        )}
        {product.isExclusive && (
          <Promotion classNames={"exclusive"} content="Exclusive"></Promotion>
        )}
      </div>
      <ProductInfo product={product}></ProductInfo>
    </div>
  );
};

export default Card;
