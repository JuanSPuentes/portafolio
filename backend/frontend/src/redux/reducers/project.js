import {
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    GET_PROJECT_PAGINATION_RESULTS_SUCCESS,
    GET_PROJECT_PAGINATION_RESULTS_FAIL,
}from '../actions/types';

const initialState = {
    project_list: null,
    filtered_project: null,
    project: null,
    count: null,
    next: null,
    previous: null
};

export default function blog(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                blog_list: payload.results.project,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_PROJECT_LIST_FAIL:
            return {
                ...state,
                blog_list: null,
                count: null,
                next: null,
                previous: null,
            }
        default:
            return state
    }
}