import "./App.css";
import { AppleBasket } from "./components/AppleBasket";
import { AppleButton } from "./components/AppleButton";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <main className="app">
      <section className="section">
        <h1>Apple basket</h1>
        <AppleButton />
        <AppleBasket />
      </section>

      <section className="section">
        <MovieList />
      </section>
    </main>
  );
}

export default App;
