import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  //   console.log(products);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      {products.map((product) => (
        <Product key={product.cca2} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
