import React from 'react'
import ResCard from './ResCard';
export default function RenderRestaurants(props) {
    const restaurants = props.restaurants;
    return (
        <div className="restaurantsList">
            {restaurants.map((restaurant)=>{
                return(
                    <div className="res" key={restaurant.id}>
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
                    </div>
                );
            })}
            
                       
            </div>
    )
}
