import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Opps! Unexpected token error!</h3>
      <button onClick={handleGoBack} className="btn btn-warning">
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
