import AsyncStorage from '@react-native-community/async-storage';
import { LOGIN_FAILED, LOGIN_FORM, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../constants/actionTypes';
import fetchAPI from '../../helpers/fetchApi';
import { setCurrentUser } from './currentUser';


// Login
export const submitAuthForm = payload => ({
    type: LOGIN_FORM,
    payload
});
export const submitLoginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
});

export const submitLoginFailure = payload => ({
    type: LOGIN_FAILED,
    payload
});


// Signup
export const submitSignupSuccess = payload => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const submitSignupFailure = payload => ({
    type: SIGNUP_FAILURE,
    payload
});





export const submitLogin = payload => async dispatch => {
    try {
        // dispatch(submitAuthForm({ submitting: true }));
        const result = await fetchAPI('/login/', {
            method: 'POST',
            body: payload
        });
        console.log(result, "my tokeees")
        await AsyncStorage.setItem('token', result.data.token);
        await dispatch(setCurrentUser(result));
        dispatch(submitLoginSuccess(result));
        return result;
    } catch (err) {
        console.log(err);
        dispatch(submitLoginFailure('The user name or password are incorrect'));
        return err;
    }
};

export const submitSignup = payload => async dispatch => {
    try {
        // dispatch(submitSignupForm({ submitting: true }));
        const result = await fetchAPI('/register/', {
            method: 'POST',
            body: payload
        });
        console.log(result, 'jhasgjafsjndjdhddh')
        // await dispatch(setCurrentUser(result));
        dispatch(submitSignupSuccess(result));
        return result;
    } catch (err) {
        console.log(err);
        dispatch(submitSignupFailure('Something went wrong'));
        return err;
    }
};



