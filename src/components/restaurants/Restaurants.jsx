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

export default function Restaurants() {
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
    return (
      <div className="restaurants">
        <Topbar />
        <FiltersWrapper />
        <RenderRestaurants
          restaurants={
            catSelected === 0
              ? all
              : catSelected === 1
              ? open
              : catSelected === 2
              ? delivery
              : pickup
          }
          searchValue={search}
        />
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
