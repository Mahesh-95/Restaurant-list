import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantDetails } from '../actions/restaurantAction';
import RestaurantDetails from './RestaurantDetails';


const RestaurantList = () => {
    const [show, setShow] = useState();

    const dispatch = useDispatch();

    const restaurantList = useSelector(state => state.restaurantList);
    const {loading, items, error} = restaurantList;

    useEffect(()=>{
        dispatch(getRestaurantDetails());
    },[dispatch])


    return (
        <div>
            <h1>Restaurant</h1>
            {error && <h3 style={{color:'red'}}>{error}</h3>}
            {loading? <h3>Loading....</h3> : (
                <div>
                    {items && items.map((item,i) =>(
                        <ul className="restaurant">
                         <li key={i} onClick={()=>setShow(i)}><RestaurantDetails item={item} show={show} index={i}/></li> 
                        </ul>
                    ))}
                </div>
            ) }
        </div>
    )
}

export default RestaurantList
