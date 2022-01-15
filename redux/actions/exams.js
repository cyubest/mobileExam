import { GET_EXAM_FAILURE, GET_EXAM_SUCCESS } from "../../constants/actionTypes";
import fetchAPI from "../../helpers/fetchApi";

export const setExamSuccess = payload => ({
    type: GET_EXAM_SUCCESS,
    payload
});

export const setExamFailure = payload => ({
    type: GET_EXAM_FAILURE,
    payload
});

export const getExams = (students) => async dispatch => {
    try {
        let std_id = 20227
        const result = await fetchAPI(`/exam_list/${students}/`, {
            method: 'GET',
        });
        console.log(result, 'exams list')
        dispatch(setExamSuccess(result));
        return result;
    } catch (err) {
        console.log(err.msg);
        dispatch(setExamFailure(err.message));
        return err;
    }
};