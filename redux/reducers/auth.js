
import { LOGIN_FAILED, LOGIN_FORM, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../../constants/actionTypes";
import { auth as initialState } from "../initialState";

const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_FORM:
            return {
                ...state,
                loginMessage: '',
                submitting: payload.submitting
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginMessage: payload,
                submitting: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                successMessage: payload.message,
                submitting: false
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                successMessage: payload.message,
                submitting: false
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                signupMessage: payload,
                submitting: false
            };

        default:
            return state;
    }
};

export default auth;
