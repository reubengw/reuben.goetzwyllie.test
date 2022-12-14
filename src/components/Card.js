import "./Card.scss";
import Promotion from "./Promotion";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";

const Card = ({ product }) => {
  return (
    <div className="product-card">
      <ProductImage
        src={product.productImage}
        alt={product.productName}
      ></ProductImage>
      {product.isSale && (
        <Promotion classNames={"onsale"} content="Sale"></Promotion>
      )}
      {product.isExclusive && (
        <Promotion classNames={"exclusive"} content="Exclusive"></Promotion>
      )}
      <ProductInfo product={product}></ProductInfo>
    </div>
  );
};

export default Card;
