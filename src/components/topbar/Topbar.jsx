import "./Topbar.scss";
import { Link } from "react-router-dom";
import logo from "../hero/images/logo.png";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="right">
          <Link to={`/`} className="home">
            Home
          </Link>

          <Link to={`/restaurants`} className="Restaurants">
            Our Restaurants
          </Link>
          <Link to={`/map`} className="map">
            Restaurants Location
          </Link>
        </div>
      </div>
    </div>
  );
}
