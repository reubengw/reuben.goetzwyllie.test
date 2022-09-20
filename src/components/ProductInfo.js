const ProductInfo = ({ product }) => {
  return (
    <div className="product-card__info">
      <div className="product-card__info__name">{product.productName}</div>
      <div className="product-card__info__price">{product.price}</div>
    </div>
  );
};

export default ProductInfo;
