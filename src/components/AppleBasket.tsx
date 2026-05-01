import { useState } from "react";
import { useStore } from "../store/useStore";

export function AppleBasket() {
  const apples = useStore((state) => state.apples);
  const [filter, setFilter] = useState<"all" | "red" | "green">("all");

  const displayedApples =
    filter === "all"
      ? apples
      : apples.filter((apple) => apple.color === filter);

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>Show All</button>
        <button onClick={() => setFilter("red")}>Only Red</button>
        <button onClick={() => setFilter("green")}>Only Green</button>
      </div>

      <p>Basket contains {displayedApples.length} items:</p>

      <div>
        {displayedApples.map((apple) => (
          <span key={apple.id}>{apple.color === "red" ? "🍎" : "🍏"}</span>
        ))}
      </div>
    </div>
  );
}
