import axios from '../Api';

export const getRestaurantsAPI = async function ({
  page = 0,
  latitude,
  longitude,
  type,
  rating,
  minPrice,
  maxPrice,
  search,
  radius
}) {
  const params = {
    page, 
    pageSize: 5,
    latitude, 
    longitude, 
    type,
    rating, 
    minPrice,
    maxPrice,
    search,
    radius
  };
  const results = await axios.get('/restaurants', {params});
  return results.data;
};

export const getCategorizedMenuItemsAPI = async function (restaurantId) {
  const results = await axios.get(`/restaurants/${restaurantId}/menu/items/categorized`);
  return results.data;
};

export const deleteRestoAPI = async function (restaurantId){
  const results = await axios.put(`/restaurants/${restaurantId}/menu/items/categorized`,{"delete": true})
}

