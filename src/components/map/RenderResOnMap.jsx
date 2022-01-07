import React from "react";
import { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Link } from "react-router-dom";
import MapCard from "./MapCard";
import logo from "./marker.png";

const RenderResOnMap = (props) => {
  console.log(logo);
  const restaurants = props.restaurants;
  const search = props.searchValue;
  const [delayHandler, setDelayHandler] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  return (
    <div>
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
            <div className="marker-btn">
              <img
                src={logo}
                onClick={(event) => {
                  setDelayHandler(
                    setTimeout(() => {
                      event.preventDefault();
                      setSelectedRestaurant(res);
                    }, 200)
                  );
                }}
              ></img>
              <p className="map-res--name">{res.name}</p>
            </div>
          </Marker>
        ))}
      {selectedRestaurant && (
        <Popup
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
            className=" "
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
    </div>
  );
};

export default RenderResOnMap;
