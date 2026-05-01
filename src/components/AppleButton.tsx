import { useStore } from "../store/useStore";

export function AppleButton() {
  const addApple = useStore((state) => state.addApple);

  return (
    <div>
      <button onClick={() => addApple("red")}>Pick Red 🍎</button>
      <button onClick={() => addApple("green")}>Pick Green 🍏</button>
    </div>
  );
}
