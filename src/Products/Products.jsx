import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-8">
      {products.map((product) => (
        <Product key={product.cca2} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
