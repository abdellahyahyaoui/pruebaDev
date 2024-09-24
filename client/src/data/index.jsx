import axios from "axios";

export const getProducts = async () => {
  const products = await axios.get(
    "http://127.0.0.1:5000/api/productos"
  );
  return products;
};
