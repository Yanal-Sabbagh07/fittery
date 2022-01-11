import React, { useContext, useState } from "react";
import ReactMapGl from "react-map-gl";
import { FetchDataContext } from "../../context/FetchDataProvider";
import {
  FilterButtonsContext,
  FilterSearchContext,
} from "../../context/FilterButtonsProvider";

import "./Map.scss";
import Topbar from "../topbar/Topbar";

import FiltersWrapper from "../filter/FiltersWrapper";
import RenderResOnMap from "./RenderResOnMap";
import { PinDropSharp } from "@material-ui/icons";

function Map(props) {
  const restaurants = useContext(FetchDataContext);
  const [catSelected] = useContext(FilterButtonsContext);
  const [search, setSearch] = useContext(FilterSearchContext);

  const [viewPort, setViewPort] = useState({
    latitude: 52.5158,
    longitude: 13.454,
    width: "100%",
    height: "87vh",
    zoom: 11,
  });

  if (restaurants !== undefined) {
    const all = restaurants;
    const open = restaurants.filter(
      (res) => res.opening_hours.open_now === true
    );
    const pickup = restaurants.filter((res) => res.pickup === true);
    const delivery = restaurants.filter((res) => res.delivery === true);
    return (
      <div>
        <Topbar page={props.page} setPage={props.setPage} />
        <ReactMapGl
          {...viewPort}
          mapboxApiAccessToken={
            "pk.eyJ1IjoieWFubzBvIiwiYSI6ImNrcHBuOGUzZzA4emwyb2s5bnQzcXlqZGwifQ.YmQYqPOConw4U5-GqUEdtA"
          }
          onViewportChange={(viewport) => {
            setViewPort(viewport);
          }}
          mapStyle={"mapbox://styles/mapbox/navigation-day-v1"}
        >
          <FiltersWrapper />
          <RenderResOnMap
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
        </ReactMapGl>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
}
export default Map;
