// action types
import {
    GET_REPOS_INIT,
    GET_REPOS_START,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,

    GET_ORGS_INIT,
    GET_ORGS_START,
    GET_ORGS_SUCCESS,
    GET_ORGS_FAIL,

    SAVE_DATA,
} from '../action-types';


export const getReposInit = (userName) => {
    return {
        type: GET_REPOS_INIT,
        payload: {userName}
    }
};
export const getReposStart = () => {
    return {
        type: GET_REPOS_START,
    }
};
export const getReposSuccess = (repos) => {
    return {
        type: GET_REPOS_SUCCESS,
        payload: {repos}
    }
};
export const getReposFail = () => {
    return {
        type: GET_REPOS_FAIL,
    }
};

export const getOrgsInit = (userName) => {
    return {
        type: GET_ORGS_INIT,
        payload: {userName}
    }
};
export const getOrgsStart = () => {
    return {
        type: GET_ORGS_START,
    }
};
export const getOrgsSuccess = (orgs) => {
    return {
        type: GET_ORGS_SUCCESS,
        payload: {orgs}
    }
};
export const getOrgsFail = () => {
    return {
        type: GET_ORGS_FAIL,
    }
};

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        payload: {data}
    }
};

