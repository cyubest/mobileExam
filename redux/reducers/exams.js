import { GET_EXAM_SUCCESS, GET_EXAM_FAILURE } from '../../constants/actionTypes';
import { exams as initialState } from './../initialState';

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_EXAM_SUCCESS:
            return {
                ...state,
                exam: { ...state.exam, ...payload },
                isLoading: false,
                error: null,
                loggedIn: true
            }
        case GET_EXAM_FAILURE:
            return {
                ...state,
                error: payload,
                submitting: false
            }
        default:
            return state;

    }
}