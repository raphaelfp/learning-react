import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser(formProps) {
    return signUser(formProps, '/signin');
}

export function signupUser(formProps) {
    return signUser(formProps, '/signup');
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
}

function signUser({ email, password }, route) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}${route}`, { email, password })
            .then(res => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', res.data.token);
                browserHistory.push('/feature');
            })
            .catch(err => {
                if(err.response.status === 401)
                    dispatch(authError("Unauthorized user"));
                else
                    dispatch(authError(err.response.data.error));
            });
    };
}

function authError(err) {
    return {
        type: AUTH_ERROR,
        payload: err
    }
}