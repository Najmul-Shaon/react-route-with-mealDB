import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Product = ({ product }) => {
  const { cca3, flags, name } = product;
  const navigate = useNavigate();

  const handleDetatils = () => {
    navigate(`/products/${cca3}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img className="w-full" src={flags.png} alt={flags.alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <div className="card-actions justify-end">
          <button onClick={handleDetatils} className="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
