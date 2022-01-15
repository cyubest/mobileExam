import AsyncStorage from '@react-native-community/async-storage';
import { EDIT_USER_INFO, GET_USER_INFO, REMOVE_CURRENT_USER, SET_CURRENT_USER, SET_CURRENT_USER_FAILURE } from '../../constants/actionTypes';
import fetchAPI from '../../helpers/fetchApi';


export const setCurrentUserSuccess = payload => ({
    type: SET_CURRENT_USER,
    payload
});

export const setCurrentUserFailure = payload => ({
    type: SET_CURRENT_USER_FAILURE,
    payload
});

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

export const setGet_User_info = payload => ({
    type: GET_USER_INFO,
    payload
});

export const setEdit_User_Info = payload => ({
    type: EDIT_USER_INFO,
    payload
})

export const setCurrentUser = result => async dispatch => {
    try {
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        dispatch(setCurrentUserSuccess(result));
        return result;
    } catch (err) {
        console.log(err.msg);
        dispatch(setCurrentUserFailure(err.message));
        return err;
    }
};

export const submitEditProfile = payload => async dispatch => {
    try {
        const token = await AsyncStorage.getItem('token');
        const result = await fetchAPI('/edit-profile/', {
            method: 'POST',
            body: payload,
        });
        console.log(result)
        dispatch(setEdit_User_Info(result))
        return result;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const getUseInfo = (user_id) => async dispatch => {
    try {
        const token = await AsyncStorage.getItem('token');
        const result = await fetchAPI(`/user_info/${user_id}/`, {
            method: 'GET',
        });
        console.log(result, 'user info list')
        dispatch(setGet_User_info(result))
        return result;
    } catch (err) {
        console.log(err)
        return err;
    }
}