import axios from "axios";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  // Function to GET products from API
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products"; // fetch all products
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data); // array of products
      })
      .catch((err) => console.log(err));
  };

  // Function to POST (add) a product
  const addproducts = () => {
    const api = "https://fakestoreapi.com/products"; // correct endpoint for POST
    axios
      .post(api, {
        id: 1,
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-[5%]">
      <button
        onClick={getproducts}
        className="px-4 py-2 mt-3 bg-red-300 text-xl rounded-full text-black"
      >
        Get Products
      </button>
      <br />
      <button
        onClick={addproducts}
        className="px-4 py-2 mt-3 bg-green-300 text-xl rounded-full text-black"
      >
        Add Product
      </button>

      <hr className="my-10" />

      {products.length > 0 ? (
        <ul className="flex flex-wrap gap-4">
          {products.map((p, index) => (
            <li key={index} className="w-1/4 p-5 bg-red-300 rounded">
              {p.title}
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-xl font-semibold">No products yet.</h1>
      )}
    </div>
  );
}

export default App;
