import axios from 'axios';
import {
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
/*     GET_PROJECT_PAGINATION_RESULTS_SUCCESS,
    GET_PROJECT_PAGINATION_RESULTS_FAIL */
} from "./types"


export const get_project_list = () => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/portafolio`,config);
        console.log(res.data);
        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROJECT_LIST_FAIL
            });
        }

    }catch (err){
        dispatch({
            type: GET_PROJECT_LIST_FAIL
        });
    }
}
