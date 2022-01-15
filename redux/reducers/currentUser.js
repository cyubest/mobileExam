import { EDIT_USER_INFO, GET_USER_INFO, REMOVE_CURRENT_USER, SET_CURRENT_USER, SET_CURRENT_USER_FAILURE } from '../../constants/actionTypes';
import { currentUser as initialState } from '../initialState';

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                profile: { ...state.profile, ...payload },
                isLoading: false,
                error: null,
                submitting: false,
                loggedIn: true
            };
        case SET_CURRENT_USER_FAILURE:
            return {
                ...state,
                error: payload,
                submitting: false
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                profile: {},
                loggedIn: false
            };
        case GET_USER_INFO:
            return {
                ...state,
                info: { ...state.info, ...payload },
                isLoading: false,
                error: null,
                submitting: false,
                loggedIn: true
            }
        case EDIT_USER_INFO:
            return {
                ...state,
                successMessage: payload,
                submitting: false
            };
        default:
            return state;
    }
};
