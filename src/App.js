import "./App.css";
import Header from "./components/Header";
import ProductCatalogue from "./components/ProductCatalogue";
import { useEffect, useState } from "react";

function App() {
  const [productCatalogue, setProductCatalogue] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("products.json");
      const products = await response.json();
      setDisplayedProducts(products);
      setProductCatalogue(products);
    };
    getData();
  }, []);

  const handleFilterChanged = (sizeSelected) => {
    const newDisplay = [];
    productCatalogue.forEach((product) => {
      if (product.size.includes(sizeSelected)) {
        newDisplay.push(product);
      }
    });
    setDisplayedProducts(newDisplay);
  };

  return (
    <div className="App">
      <div>
        <Header
          title={"Women's tops"}
          filterOptions={["XS", "S", "M", "L", "XL"]}
          handleFilterChanged={handleFilterChanged}
        ></Header>
        <ProductCatalogue products={displayedProducts}></ProductCatalogue>
      </div>
    </div>
  );
}

export default App;
