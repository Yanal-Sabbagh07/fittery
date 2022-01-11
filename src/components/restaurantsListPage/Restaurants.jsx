import { useContext, useState } from "react";
import { FetchDataContext } from "../../context/FetchDataProvider";
import {
  FilterButtonsContext,
  FilterSearchContext,
} from "../../context/FilterButtonsProvider";
import RenderRestaurants from "./RenderRestaurants";

import "./Restaurants.scss";
import Topbar from "../topbar/Topbar";
import FiltersWrapper from "../filter/FiltersWrapper";

export default function Restaurants(props) {
  const restaurants = useContext(FetchDataContext);

  const [catSelected] = useContext(FilterButtonsContext);

  const [search, setSearch] = useContext(FilterSearchContext);

  if (restaurants !== undefined) {
    const all = restaurants;
    const open = restaurants.filter(
      (res) => res.opening_hours.open_now === true
    );
    const pickup = restaurants.filter((res) => res.pickup === true);
    const delivery = restaurants.filter((res) => res.delivery === true);

    const filtered = restaurants.filter((val) => {
      if (search === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.cuisine.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    });
    const filteredOpen = open.filter((val) => {
      if (search === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.cuisine.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    });
    const filteredDelivery = delivery.filter((val) => {
      if (search === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.cuisine.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    });
    const filteredPickup = pickup.filter((val) => {
      if (search === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.cuisine.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    });

    return (
      <div className="restaurants">
        <Topbar page={props.page} setPage={props.setPage} />
        <FiltersWrapper />
        <RenderRestaurants
          restaurants={
            catSelected === 0
              ? all && filtered
              : catSelected === 1
              ? open && filteredOpen
              : catSelected === 2
              ? delivery && filteredDelivery
              : pickup && filteredPickup
          }
          searchValue={search}
        />
      </div>
    );
  } else {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
}
