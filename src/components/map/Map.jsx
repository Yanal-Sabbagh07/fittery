import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { FetchDataContext } from "../../context/FetchDataProvider";
import MapCard from "./MapCard";
import "./Map.scss";
import Topbar from "../topbar/Topbar";
import logo from "./ma.png";

function Map(props) {
  const menu = ["All", "Open", "Delivery", "Pickup"];
  const restaurants = useContext(FetchDataContext);

  const [viewPort, setViewPort] = useState({
    latitude: 52.5158,
    longitude: 13.454,
    width: "100vw",
    height: "100vh",
    zoom: 11,
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [delayHandler, setDelayHandler] = useState(null);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  if (restaurants !== undefined) {
    return (
      <div>
        <ReactMapGl
          {...viewPort}
          mapboxApiAccessToken={
            "pk.eyJ1IjoieWFubzBvIiwiYSI6ImNrcHBuN2U0MzA5Y28ydnF6NHh2OXYyODQifQ.8rZb8cDgvvYHh9CM6vy9XA"
          }
          onViewportChange={(viewport) => {
            setViewPort(viewport);
          }}
          mapStyle={"mapbox://styles/mapbox/streets-v11"}
        >
          <Topbar />
          <div className="menu">
            <div className="menuLeft">
              <input
                id="input"
                className="search"
                name="searchBar"
                placeholder="Search by name / type"
                onChange={handleChange}
                value={search}
              ></input>
            </div>

            <div className="menuRight">
              <ul>
                <li>All </li>
                <li>open </li>
                <li>Delicery </li>
                <li>Pickup </li>
              </ul>
            </div>
          </div>

          {restaurants
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase()) ||
                val.cuisine.includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((res) => (
              <Marker
                key={res.id}
                latitude={res.geometry.location.lat}
                longitude={res.geometry.location.lng}
              >
                <button
                  className="marker-btn"
                  onClick={(event) => {
                    setDelayHandler(
                      setTimeout(() => {
                        event.preventDefault();
                        setSelectedRestaurant(res);
                      }, 200)
                    );
                  }}
                >
                  <div>
                    <img src={logo}></img>
                    <p className="map-res--name">{res.name}</p>
                  </div>
                </button>
              </Marker>
            ))}

          {selectedRestaurant && (
            <Popup
              className="mapboxgl-popup"
              latitude={selectedRestaurant.geometry.location.lat}
              longitude={selectedRestaurant.geometry.location.lng}
              closeButton={true}
              closeOnClick={false}
              closeOnMove={true}
              maxWidth={"auto"}
              onClose={() => {
                setSelectedRestaurant(null);
              }}
            >
              <Link
                className="react-router__link"
                to={`/restaurants/${selectedRestaurant.id}`}
                style={{ textDecoration: "none" }}
              >
                <MapCard
                  img={selectedRestaurant.photos[0].links[0]}
                  name={selectedRestaurant.name}
                  rating={selectedRestaurant.rating}
                  usrs={selectedRestaurant.user_ratings_total}
                  cuisine={selectedRestaurant.cuisine}
                  type={selectedRestaurant.types[0]}
                  delivery={selectedRestaurant.delivery}
                  pickup={selectedRestaurant.pickup}
                  open={selectedRestaurant.opening_hours.open_now}
                  openHour={selectedRestaurant.opening_hours.hours.open}
                  closeHour={selectedRestaurant.opening_hours.hours.close}
                />
              </Link>
            </Popup>
          )}
        </ReactMapGl>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
}
export default Map;
