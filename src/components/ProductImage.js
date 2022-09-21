const ProductImage = ({ src, alt }) => {
  return (
    <img
      className="product-card__image"
      alt={alt}
      src={src ? `images/${src}` : "http://via.placeholder.com/280"}
    />
  );
};

export default ProductImage;
