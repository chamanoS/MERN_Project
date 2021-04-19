import axios from 'axios'
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productConstants'

export const listProducts = () => async(dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST})

        const { data} = await axios.get('')
    }
}