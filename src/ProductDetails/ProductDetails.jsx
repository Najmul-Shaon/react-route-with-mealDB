import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { name, flags, population, capital } = details[0];
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-full" src={flags.png} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name.common}</h2>
        <h3 className="text-sm font-semibold">
          Official Name: {name.official}
        </h3>
        <p>Capital: {capital}</p>
        <p>
          Population:
          {population}
        </p>
        <div className="card-actions justify-end">
          <button onClick={handleBack} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
