import { useState } from 'react';
import './Restaurants.scss';

export default function Restaurants() {
    const [catSelected,setCatSelected]= useState(0);
    const handleClick = (event)=>{
        const value = event.target.value;
        return(
            setCatSelected(value)
        );
    }
    return (
        <div className="restaurants">
           <h1>Our Restaurants in <em>Berlin</em></h1>
           <div className = "menu">
                <div className="menuLeft">
                <input id="input" className="search" name='searchBar'  placeholder='Search by name / type'></input>
                </div>
                <div className="menuRight">
                    <ul>
                        <li className={catSelected === 0 && "active"} onClick={handleClick} value={0}>All</li>
                        <li className={catSelected === 1 && "active"} onClick={handleClick} value={1}>OPEN</li>
                        <li className={catSelected === 2 && "active"} onClick={handleClick} value={2}>Delivery</li>
                        <li className={catSelected === 3 && "active"} onClick={handleClick} value={3}>Pickup</li>
                    </ul>
                </div>
           </div>

        </div>
        
    )
}
