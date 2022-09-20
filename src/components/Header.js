import styled from "styled-components";
import ProductFilter from "./ProductFilter";
const StyledTitle = styled.h1`
  text-align: left;
  padding: 5px;
  margin: 0;
`;

const StyledHeader = styled.div`
  background-color: #ddf2f3;
  display: flex;
  width: 100%;
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      <ProductFilter options={["XS", "S", "M", "L", "XL"]}></ProductFilter>
    </StyledHeader>
  );
};

export default Header;
