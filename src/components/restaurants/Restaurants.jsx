import { useContext, useState } from 'react';
import { FetchDataContext } from '../../context/FetchDataProvider';
import RenderRestaurants from './RenderRestaurants';

import './Restaurants.scss';

export default function Restaurants() {
    const restaurants = useContext(FetchDataContext);
    const [catSelected,setCatSelected]= useState(0);
    const handleClick = (event)=>{
        const value = event.target.value;
        return(
            setCatSelected(value)
        );
    }
    if(restaurants !== undefined){
        const all = restaurants;
        const open = restaurants.filter(res => res.opening_hours.open_now === true);
        const pickup = restaurants.filter(res => res.pickup === true);
        const delivery = restaurants.filter(res => res.delivery === true);
        return (
            <div className="restaurants">
            <h1>Our Restaurants in <em>Berlin</em></h1>
            <div className = "menu">
                    <div className="menuLeft">
                    <input id="input" className="search" name='searchBar'  placeholder='Search by name / type'></input>
                    </div>

                    <div className="menuRight">
                        <ul>
                            <li className={catSelected === 0 ? "active" : ""} onClick={handleClick} value={0}>All</li>
                            <li className={catSelected === 1 ? "active" : ""} onClick={handleClick} value={1}>OPEN</li>
                            <li className={catSelected === 2 ? "active" : ""} onClick={handleClick} value={2}>Delivery</li>
                            <li className={catSelected === 3 ? "active" : ""} onClick={handleClick} value={3}>Pickup</li>
                        </ul>
                    </div>
                    
                   
            </div>
            <RenderRestaurants 
                restaurants={catSelected === 0 ? all : catSelected === 1 ? open : catSelected === 2 ? delivery : pickup}
            />

            </div>
            
        )
    }else { 
        return(<h1>Loading...</h1>)
    }
}
