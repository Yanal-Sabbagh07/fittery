import './App.scss'
import Hero from "./components/hero/Hero";
import Restaurants from './components/restaurants/Restaurants';
import FetchDataProvider from './context/FetchDataProvider';
function App() {
  return (
    <div className="App">
      <div className="sections">
        <Hero />
        <FetchDataProvider>
          <Restaurants />
        </FetchDataProvider>
      </div>
    </div>
  );
}

export default App;
