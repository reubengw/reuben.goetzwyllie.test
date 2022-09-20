import styled from "styled-components";
const StyledDropdown = styled.select`
  margin: auto 0.5rem auto auto;
  height: 32px;
`;
const ProductFilter = ({ options }) => {
  return (
    <StyledDropdown>
      <option defaultValue="filter by size" disabled hidden></option>
      {options.map((size, index) => {
        return <option key={index}>{size}</option>;
      })}
    </StyledDropdown>
  );
};

export default ProductFilter;
