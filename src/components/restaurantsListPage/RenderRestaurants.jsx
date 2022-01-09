import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import ResCard from "./ResCard";

export default function RenderRestaurants(props) {
  const restaurants = props.restaurants;
  console.log("props comming:" + restaurants);
  const [currentPage, setCurrentPage] = useState(1);
  const [resPerPage] = useState(3);
  // get current restaurants
  const indexOfLastRes = currentPage * resPerPage;
  const indexOfFirstRes = indexOfLastRes - resPerPage;
  const currentRes = restaurants.slice(indexOfFirstRes, indexOfLastRes);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="restaurantsList-container">
      <div className="restaurantsList">
        {currentRes.map((restaurant) => {
          return (
            <div className="res" key={restaurant.id}>
              <Link
                className="react-router__link"
                to={`/restaurants/${restaurant.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <ResCard
                  img={restaurant.photos[0].links[0]}
                  name={restaurant.name}
                  address={restaurant.formatted_address}
                  cuisine={restaurant.cuisine}
                  type={restaurant.types[0]}
                  delivery={restaurant.delivery}
                  pickup={restaurant.pickup}
                  open={restaurant.opening_hours.open_now}
                  openHour={restaurant.opening_hours.hours.open}
                  closeHour={restaurant.opening_hours.hours.close}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          resPerPage={resPerPage}
          totalRes={restaurants.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
