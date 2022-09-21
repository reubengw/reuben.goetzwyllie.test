import styled from "styled-components";
const StyledDropdown = styled.select`
  margin: auto 0.5rem auto auto;
  height: 32px;
`;
const ProductFilter = ({ options, handleFilterChanged }) => {
  return (
    <StyledDropdown
      onChange={(e) => {
        handleFilterChanged(e.target.value);
      }}
      defaultValue="nofilter"
    >
      <option value="nofilter">Filter by size</option>
      {options.map((size, index) => {
        return (
          <option key={index} value={size}>
            {size}
          </option>
        );
      })}
    </StyledDropdown>
  );
};

export default ProductFilter;
