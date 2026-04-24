import { UserDirectory } from "./components/UserDirectory";
import { ProductCatalog } from "./components/ProductCatalog";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <UserDirectory />
      <ProductCatalog />
    </div>
  );
}

export default App;
