import "../../css/index.css";
import "../../css/homePage.css";

import { useState, React } from "react";
import { CreateAxiosRequest } from "../functionalComponents/AxiosData"; 
import { useNavigate } from "react-router-dom";

const WelcomeComponent = () => {
  const [Category, setCategory] = useState();
  const [Response, setResponse] = useState();
  const [ValidCategory, setValidCategory] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    setValidCategory(false);
    CreateAxiosRequest(Category, help);
    if (ValidCategory) {
      navigate(`/game/${Category}`);
    }
  };

  function help(name) {
    setValidCategory(true);
  }

  return (
    <>
      <div className="flex container flex-row full-width-height ">
        <div className="background-noRepeat-cover Img-container HomePageImg"></div>
        <div className="background-noRepeat-cover Img-container Game-container flex flex-col">
          <h1>Welcome to an Exciting Adventure!</h1>
          <div className="form flex flex-row">
            <label htmlFor="Input"> enter your favorite category: </label>
            <input
              className="InputBox"
              type="text"
              id="Input"
              placeholder="➢ E.g., cities.."
              onInput={(e) => {
                setCategory(e.target.value);
              }}
              required
            />
            <div
              className="icon Game-container "
              onClick={() => {
                handleClick();
              }}
            >
            <div>
              🚀
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeComponent;
