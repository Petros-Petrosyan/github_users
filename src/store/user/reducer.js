import produce from 'immer';

// action types
import {
    GET_REPOS_START,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,

    GET_ORGS_START,
    GET_ORGS_SUCCESS,
    GET_ORGS_FAIL,
} from '../action-types';


const initialState = {
    repositoriesList: {
        repositories: null,
        loading: false,
        exist: false,
    },
    organisationsList: {
        organisations: null,
        loading: false,
        exist: false,
    }
};


const getReposStart = (state) => {
    return produce(state, draftState => {
        draftState.repositoriesList.loading = true;
        draftState.repositoriesList.exist = false;
    })
};
const getReposSuccess = (state, payload) => {
    const {repos} = payload;

    return produce(state, draftState => {
        draftState.repositoriesList.repositories = repos;
        draftState.repositoriesList.loading = false;
        draftState.repositoriesList.exist = true;
    })
};
const getReposFail = (state) => {
    return produce(state, draftState => {
        draftState.repositoriesList.loading = false;
        draftState.repositoriesList.exist = false;
    })
};

const getOrgsStart = (state) => {
    return produce(state, draftState => {
        draftState.organisationsList.loading = true;
        draftState.organisationsList.exist = false;
    })
};
const getOrgsSuccess = (state, payload) => {
    const {orgs} = payload;

    return produce(state, draftState => {
        draftState.organisationsList.organisations = orgs;
        draftState.organisationsList.loading = false;
        draftState.organisationsList.exist = true;
    })
};
const getOrgsFail = (state) => {
    return produce(state, draftState => {
        draftState.organisationsList.loading = false;
        draftState.organisationsList.exist = false;
    })
};


const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_REPOS_START: return getReposStart(state);
        case GET_REPOS_SUCCESS: return getReposSuccess(state, payload);
        case GET_REPOS_FAIL: return getReposFail(state);

        case GET_ORGS_START: return getOrgsStart(state);
        case GET_ORGS_SUCCESS: return getOrgsSuccess(state, payload);
        case GET_ORGS_FAIL: return getOrgsFail(state);

        default: return state;
    }
};


export { userReducer };