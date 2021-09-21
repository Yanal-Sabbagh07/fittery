import MenuList from './MenuList';
import { useContext, useState } from 'react';
import { FetchDataContext } from '../../context/FetchDataProvider';
import RenderRestaurants from './RenderRestaurants';

import './Restaurants.scss';
import Topbar from '../topbar/Topbar';

export default function Restaurants() {
    const restaurants = useContext(FetchDataContext);
    const Menu = ["All","Open","Delivery","Pickup"];
    const [catSelected,setCatSelected]= useState(0);
    const [search, setSearch] = useState('');
    const handleChange = (event =>{
        const value = event.target.value;
        setSearch(value);
    })
    const handleClick = (id)=>{
        
        return(
            setCatSelected(id)
        );
    }
    if(restaurants !== undefined){
        const menu = ["All","Open", "Delivery","Pickup"];
        const all = restaurants;
        const open = restaurants.filter(res => res.opening_hours.open_now === true);
        const pickup = restaurants.filter(res => res.pickup === true);
        const delivery = restaurants.filter(res => res.delivery === true);
        return (
           
            <div className="restaurants">
            
            <Topbar/>
            
            {/* <h1>Our Restaurants in <em>Berlin</em></h1> */}
            <div className = "menu">
                    <div className="menuLeft">
                    <input id="input" className="search" name='searchBar'  placeholder='Search by name / type' onChange={handleChange} value={search}></input>
                    </div>

                    <div className="menuRight">
                        <ul>
                            {menu.map((item,index)=><MenuList key={index} item={item} id={index} onChecked={handleClick} active={catSelected === index}></MenuList>)}
                        </ul>
                    </div>
                    
                   
            </div>
            <RenderRestaurants 
                restaurants={catSelected === 0 ? all : catSelected === 1 ? open : catSelected === 2 ? delivery : pickup}
                searchValue = {search}
            />

            </div>
            
        )
    }else { 
        return(<h1>Loading...</h1>)
    }
}
