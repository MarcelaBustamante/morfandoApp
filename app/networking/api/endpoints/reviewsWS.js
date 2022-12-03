import axios from '../Api';

export const getReviews = async function ({
  restaurantId,
  page = 0,
  rating,
  userId,
}) {
  const params = {
    restaurantId,
    page, 
    pageSize: 5,
    rating,
    userId  
  };
  const results = await axios.get(`/restaurants/${restaurantId}/reviews`, {params});
  return results.data;
};

export const addReview = async function(form, restaurantId){
    try {
        const result = await axios.post(`/restaurants/${restaurantId}/reviews`, form).catch(err => {
            console.log("Alta de comentario error", err);
            return Promise.reject(err);
        });
        console.log("Alta comentario ok", result);
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
}