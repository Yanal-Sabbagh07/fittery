import React from 'react';
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
export default function RenderRestaurants(props) {
    const restaurants = props.restaurants;
    const search = props.searchValue;
    return (
        <div className="restaurantsList">
            {restaurants.filter((val) => {
                if (search === '') {
                    return val;
                } else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.cuisine.includes(search.toLowerCase())) {
                    return val;
            }
            }).map((restaurant)=>{
                return(
                    <div className="res" key={restaurant.id}>
                    <Link
                        className='react-router__link'
                        to={`/restaurants/${restaurant.id}`}
                        style={{
                        textDecoration: 'none',
                        }}
                    >
                        <ResCard
                            img={restaurant.photos[0].links[0]}
                            name={restaurant.name}
                            address={restaurant.formatted_address}
                            cuisine={restaurant.cuisine}
                            type={restaurant.types[0]}
                            delivery={restaurant.delivery}
                            pickup={restaurant.pickup}
                            open={restaurant.opening_hours.open_now}
                            openHour={restaurant.opening_hours.hours.open}
                            closeHour={restaurant.opening_hours.hours.close}
                        />
                        </Link>
                    </div>
                );
            })}
            
                       
            </div>
    )
}
