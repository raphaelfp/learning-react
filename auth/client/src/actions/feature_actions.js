import axios from 'axios';
import { FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {headers: {authorization: localStorage.getItem('token')}})
            .then(res => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: res.data.message
                });
            });
    }
}