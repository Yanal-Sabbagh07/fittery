import "./Topbar.scss";
import { Link } from "react-router-dom";
import logo from "../hero/images/logo.png";

export default function Topbar(props) {
  const handleClick = (event) => {
    console.log(event.target.name);
    props.setPage(event.target.name);
  };
  return (
    <div className={`topbar ${"home" === props.page && "transparent"}`}>
      <div className="wrapper">
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="right">
          <Link
            to={`/`}
            className={`Restaurants ${"home" === props.page && "active"}`}
            name="home"
            onClick={handleClick}
          >
            Home
          </Link>

          <Link
            to={`/restaurants`}
            className={`Restaurants ${
              "restaurants" === props.page && "active"
            }`}
            name="restaurants"
            onClick={handleClick}
          >
            Our Restaurants
          </Link>
          <Link
            to={`/map`}
            className={`Restaurants ${"map" === props.page && "active"}`}
            name="map"
            onClick={handleClick}
          >
            Restaurants Location
          </Link>
        </div>
      </div>
    </div>
  );
}
