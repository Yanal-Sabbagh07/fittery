import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState();
  const fetchData = async (setRestaurants) => {
    const { data } = await axios.get(
      'https://redi-final-restaurants.herokuapp.com/restaurants'
    );
    setRestaurants(data.results);
  };

  useEffect(() => {
    fetchData(setRestaurants);
  }, []);
  return (
    <FetchDataContext.Provider value={restaurants}>
      {children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataProvider;
