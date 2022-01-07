import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Restaurants from "./components/restaurants/Restaurants";
import Map from "./components/map/Map";
import RestaurantScreen from "./components/restaurant/RestaurantScreen";
import FetchDataProvider from "./context/FetchDataProvider";
import FilterButtonsProvider from "./context/FilterButtonsProvider";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" component={Hero} exact />
        <FetchDataProvider>
          <FilterButtonsProvider>
            <Route path="/restaurants" component={Restaurants} exact />
            <Route path="/map" component={Map} exact />
          </FilterButtonsProvider>
          <Route path="/restaurants/:id" component={RestaurantScreen} />
        </FetchDataProvider>
      </div>
    </Router>
  );
}

export default App;
