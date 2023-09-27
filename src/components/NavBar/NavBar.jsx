import { Link } from "react-router-dom";
import "../../css/index.css";
import "../../css/navbar.css";
import "../../css/GamePage.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav flex flex-row">
        <u style={{ gap: "3rem" }} className="flex flex-row margin-right">
          <li className="flex flex-row gap-">
            <div id="homePic" className="i"></div>
            <Link to="/"> Home </Link>
          </li>
          <li className="flex flex-row gap-">
            <div id="userPic" className="i"></div>
            <Link to="/login"> Login </Link>
          </li>
        </u>
      </nav>
    </>
  );
};

export default NavBar;
