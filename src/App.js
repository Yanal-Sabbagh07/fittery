import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss'
import Hero from "./components/hero/Hero";
import Restaurants from './components/restaurants/Restaurants';
import RestaurantScreen from './components/restaurant/RestaurantScreen';
import FetchDataProvider from './context/FetchDataProvider';
function App() {
  return (
    <Router>
    <div className="App">
    
      
        <Route path='/' component={Hero} exact/>
        <FetchDataProvider>
          <Route path='/restaurants' component={Restaurants} exact/>
          <Route path='/restaurants/:id' component={RestaurantScreen} />
        </FetchDataProvider>
      </div>
    
    </Router>
  );
}

export default App;