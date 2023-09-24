import { React, useEffect, useState } from "react";
import "../css/GamePage.css";
import "../css/index.css";
import { useParams } from "react-router-dom";
import { CreateAxiosRequest } from "../components/functionalComponents/AxiosData";

const GamePage = () => {
  const data = useParams();
  const [Category, setCategory] = useState(data.param1.toLowerCase());
  const [Description, setDescription] = useState();
  const [ValidCategory, setValidCategory] = useState(false);
  const [Response, setResponse] = useState();
  const [Correct, setCorrect] = useState(0);
  const [Fault, setFault] = useState(0);
  const [Img, setImg] = useState();
  const [Answer, setAnswer] = useState();

  useEffect(() => {
    setAnswer("");
    setValidCategory(false);
    CreateAxiosRequest(Category, help);
  }, [Category, Correct, Fault]);


  function help(name) {
    setResponse(name);
    setValidCategory(true);
    setImg(name.src.original);
    setDescription(name.alt.toLowerCase());
  }

  function CheckAnswer() {
    if (Answer.length < 1) return false;
    
    if (Description.includes(Answer)) {
      setCorrect((Correct) => {
        return Correct + 1;
      });
    } else {
      setFault((Fault) => {
        return Fault + 1;
      });
    }
  }
  return (
    <>
      <div className="background-noRepeat-cover GamePage flex">
        <div className="GameCard-Container">
          <h1>Get ready to challenge yourself!</h1>
          <div className="card flex flex-col">
            <h2> Please share your visual observations ... </h2>
            <div className="flex flex-row">
              <div
                style={{
                  backgroundImage: `url(${Img})`,
                }}
                className="card-img background-noRepeat-cover GamePage"
              ></div>
              <div className="flex flex-col margin-right">
                <div className="flex flex-row form">
                  <label className="flex flex-row form">
                    <input
                      className="InputBox"
                      type="text"
                      value={Answer}
                      id="Input"
                      placeholder="➢ What you see?"
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                      required
                    />
                    <div
                      className="icon Game-container "
                      onClick={() => {
                        CheckAnswer();
                      }}
                    >
                      🗳️
                    </div>
                  </label>
                </div>

                <div className="card-icons">✔️ ---- {Correct}</div>
                <div className="card-icons">❌ ---- {Fault}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
