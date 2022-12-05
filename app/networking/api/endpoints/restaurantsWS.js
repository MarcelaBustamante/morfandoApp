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

export const getRestoAPI = async function (restaurantId) {
  const results = await axios.get(`/restaurants/${restaurantId}`);
  return results.data;
}

export const deleteRestoAPI = async function (restaurantId){
  const results = await axios.delete(`/restaurants/${restaurantId}`);
  return results.data;
}

export const updateRestoAPI = async function (form, restaurantId){
  try {
    const result = await axios.post(`/restaurants/${restaurantId}`, form).catch(err => {
        console.log("Editar resto error", err);
        return Promise.reject(err);
    });
    console.log("Editar comentario ok", result);
    return result.data;
} catch (error) {
    return Promise.reject(error);
}
}
/*

public Restaurant update(long restaurantId, RestaurantUpdate update, String partnerEmail) {
		Restaurant restaurant = validateRestaurantOwner.validateOwnership(restaurantId, partnerEmail);
		if (null != update.getName()) {
			restaurant.setName(update.getName());
		}
		if (null != update.getPriceRange()) {
			restaurant.setPriceRange(update.getPriceRange());
		}
		if (null != update.getType()) {
			restaurant.setType(update.getType());
		}
		if (null != update.getAddress()) {
			restaurant.setAddress(update.getAddress());
		}
		if (null != update.getPhotos()) {
			restaurant.updatePhotos(update.getPhotos());
		}
		if (null != update.getBusinessHours()) {
			restaurant.updateBusinessHours(update.getBusinessHours());
		}
		return repo.save(restaurant);
	}

*/
