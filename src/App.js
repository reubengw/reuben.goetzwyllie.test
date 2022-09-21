import "./App.css";
import Header from "./components/Header";
import ProductCatalogue from "./components/ProductCatalogue";
import { useEffect, useState } from "react";

function App() {
  const appTitle = "Women's tops";
  const filterOptions = ["XS", "S", "M", "L", "XL"];
  const [productCatalogue, setProductCatalogue] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [error, setError] = useState();
  // fetch product data, set state for entire catalogue and its displayed subset
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("products.json");
        const products = await response.json();
        // throw error if input is not an array
        if (!Array.isArray(products)) {
          throw new Error();
        }
        setDisplayedProducts(products);
        setProductCatalogue(products);
      } catch (error) {
        console.log(error);
        setError("Oops! something went wrong");
      }
    };
    getData();
  }, []);

  //set displayed products depending on size selected in ProductFilter component
  const handleFilterChanged = (sizeSelected) => {
    if (sizeSelected === "nofilter") {
      setDisplayedProducts(productCatalogue);
      return;
    }
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
          title={appTitle}
          filterOptions={filterOptions}
          handleFilterChanged={handleFilterChanged}
        ></Header>
        {error ? (
          <div>{error}</div>
        ) : (
          <ProductCatalogue products={displayedProducts}></ProductCatalogue>
        )}
      </div>
    </div>
  );
}

export default App;
