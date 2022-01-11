import react, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Restaurants from "./components/restaurantsListPage/Restaurants";
import Map from "./components/map/Map";
import RestaurantScreen from "./components/restaurant/RestaurantScreen";
import FetchDataProvider from "./context/FetchDataProvider";
import FilterButtonsProvider from "./context/FilterButtonsProvider";
function App() {
  const [page, setPage] = useState("home");
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <Hero page={page} setPage={setPage} />
        </Route>
        <FetchDataProvider>
          <FilterButtonsProvider>
            <Route path="/restaurants" exact>
              <Restaurants page={page} setPage={setPage} />
            </Route>

            <Route path="/map" exact>
              <Map page={page} setPage={setPage} />
            </Route>
          </FilterButtonsProvider>
          <Route path="/restaurants/:id" component={RestaurantScreen} />
        </FetchDataProvider>
      </div>
    </Router>
  );
}

export default App;
