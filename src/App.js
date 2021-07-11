import './App.scss'
import Hero from "./components/hero/Hero";
import Restaurants from './components/restaurants/Restaurants';
function App() {
  return (
    <div className="App">
      <div className="sections">
        <Hero />
        <Restaurants />
      </div>
    </div>
  );
}

export default App;
