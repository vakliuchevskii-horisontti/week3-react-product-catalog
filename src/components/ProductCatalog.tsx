import { useEffect, useState } from "react";
import type { StoreItem } from "../types";
import { Modal } from "./Modal";

export function ProductCatalog() {
  const [items, setItems] = useState<StoreItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6",
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="p-8 text-xl font-bold text-blue-500 animate-pulse">
        Loading products...
      </div>
    );
  }

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Tuotekuvasto</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-contain mb-6"
            />

            <h3 className="font-bold mb-4 min-h-12">{item.title}</h3>

            <p className="text-blue-600 font-bold">{item.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="h-56 w-full object-contain mb-6"
          />

          <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>

          <p className="text-blue-600 font-bold mb-4">
            {selectedItem.price.toFixed(2)} €
          </p>

          <p className="text-gray-700">{selectedItem.description}</p>
        </Modal>
      )}
    </section>
  );
}
