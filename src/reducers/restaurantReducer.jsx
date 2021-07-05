import { RESTAURANT_DETAIL_REQUEST, RESTAURANT_DETAIL_SUCCESS, RESTAURANT_DETAIL_FAIL } from "../constant/restaurantConstant";

export const restaurantListReducer = (state = {}, action) => {
    switch(action.type){
        case RESTAURANT_DETAIL_REQUEST:
            return { loading: true 
                    }
        case RESTAURANT_DETAIL_SUCCESS:
            return { 
                    loading: false,
                    items: action.payload
                                }
        case RESTAURANT_DETAIL_FAIL:
            return {
                    loading:false,
                    error: action.payload
            }
        default:
            return state
    }
}