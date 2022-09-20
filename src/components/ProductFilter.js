import styled from "styled-components";
const StyledDropdown = styled.select`
  margin: auto 0.5rem auto auto;
  height: 32px;
`;
const ProductFilter = ({ options }) => {
  console.log(options);
  options.forEach((element) => {
    console.log(element);
  });
  return (
    <StyledDropdown>
      <option value="" selected disabled hidden>
        filter by size
      </option>
      {options.map((size, index) => {
        return <option>{size}</option>;
      })}
    </StyledDropdown>
  );
};

export default ProductFilter;
