import axios from "axios";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET all products
  const getProducts = () => {
    setLoading(true);
    setError(null);
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((res) => {
        console.log("Fetched products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch products.");
      })
      .finally(() => setLoading(false));
  };

  // POST new product
  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      })
      .then((res) => {
        console.log("Product added:", res.data);
        alert("New product added successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product.");
      });
  };

  return (
    <div className="p-5">
      <div className="flex gap-4 mb-6">
        <button
          onClick={getProducts}
          className="p-2 bg-amber-300 rounded-full hover:bg-amber-400 transition"
        >
          📦 Fetch Products
        </button>

        <button
          onClick={addProducts}
          className="p-2 bg-green-300 rounded-full hover:bg-green-400 transition"
        >
          ➕ Add New Product
        </button>
      </div>

      {loading && (
        <p className="text-blue-500 font-semibold">Loading products...</p>
      )}
      {error && <p className="text-red-500 font-semibold">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mx-auto mb-2"
            />
            <h2 className="font-bold text-sm mb-1">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {product.category.toUpperCase()}
            </p>
            <p className="text-green-600 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
