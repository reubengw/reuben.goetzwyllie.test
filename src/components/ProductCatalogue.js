import styled from "styled-components";
import Card from "./Card";
const StyledCatalogue = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const ProductCatalogue = ({ products }) => {
  return (
    <StyledCatalogue>
      {products.map((product, index) => {
        return <Card>{product}</Card>;
      })}
    </StyledCatalogue>
  );
};

export default ProductCatalogue;
