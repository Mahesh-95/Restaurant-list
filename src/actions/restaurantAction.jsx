import axios from 'axios';
import { RESTAURANT_DETAIL_REQUEST, RESTAURANT_DETAIL_SUCCESS, RESTAURANT_DETAIL_FAIL } from '../constant/restaurantConstant';

export const getRestaurantDetails = () => async(dispatch) =>{
    try {
        dispatch({
            type: RESTAURANT_DETAIL_REQUEST
        });

        const {data} = await axios.get(`https://api.npoint.io/93bed93a99df4c91044e`);
        
        dispatch({
            type: RESTAURANT_DETAIL_SUCCESS,
            payload : data.body.Recommendations
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_DETAIL_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });
    }
}

