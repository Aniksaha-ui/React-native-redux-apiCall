import axios from 'axios';

import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS,
   } from '../constants/categoryConstants'

export const getCategory =()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_CATEGORY_REQUEST})
        const config = {
            headers: {
                'Accept':'*/*',
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':"PUT,POST,DELETE,GET,OPTIONS",
                'Access-Control-Allow-Credentials':"true",
                'Access-Control-Allow-Headers':"Accept,Authorization,Content-type"
            }
        }
     
        
       const {data} = await axios.get('https://ecotech.xixotech.net/public/api/allcategory',config)
           
       dispatch({
            type:ALL_CATEGORY_SUCCESS,
            payload:data,
        })

    }catch(error){
        dispatch({
            type:ALL_CATEGORY_FAIL,
            payload:error.response.data.message
        })
    }
}