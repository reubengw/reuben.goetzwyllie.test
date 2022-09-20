const Promotion = ({ classNames, content }) => {
  return (
    <div className={"product-card__promo"}>
      <div className={"product-card__promo--" + classNames}>{content}</div>
    </div>
  );
};

export default Promotion;
