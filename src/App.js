import "./App.css";
import Header from "./components/Header";
import ProductCatalogue from "./components/ProductCatalogue";

function App() {
  return (
    <div className="App">
      <div>
        <Header title={"Women's tops"}></Header>
        <ProductCatalogue
          products={["1", "2", "3", "4", "5", "6", "7", "8"]}
        ></ProductCatalogue>
      </div>
    </div>
  );
}

export default App;
