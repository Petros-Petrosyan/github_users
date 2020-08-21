import toast from 'cogo-toast';
import { getAllStorageData } from '../../utiles';

// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// http services
import {
    getUserReposRequest,
    getUserOrgsRequest,
} from '../../services/http-services';

// action types
import {
    GET_REPOS_INIT,
    GET_ORGS_INIT,
    SAVE_DATA
} from '../action-types';

// actions
import {
    getReposStart,
    getReposSuccess,
    getReposFail,

    getOrgsStart,
    getOrgsSuccess,
    getOrgsFail,
} from './action';


function* getRepos(action) {
    try {
        const {payload: {userName}} = action;
        yield put(getReposStart());
        const res = yield getUserReposRequest(userName);
        const {data: repos} = res;
        yield put(getReposSuccess(repos));
    } catch (err) {
        yield put(getReposFail());
        toast.error(err.message, {position: 'bottom-right'});
    }
}

function* getOrgs(action) {
    try {
        const {payload: {userName}} = action;
        yield put(getOrgsStart());
        const res = yield getUserOrgsRequest(userName);
        const {data: orgs} = res;
        yield put(getOrgsSuccess(orgs));
    } catch (err) {
        yield put(getOrgsFail());
        toast.error(err.message, {position: 'bottom-right'});
    }
}

function save(action) {
    try {
        const {payload: {data}} = action;
        if (localStorage.getItem(data.id)) {
            throw new Error('Already saved');
        } else if (getAllStorageData().length >= 10) {
            throw new Error('Maximum saved user 10');
        } else {
            localStorage.setItem(data.id, JSON.stringify(data));
            toast.success('successfully saved', {position: 'bottom-right'});
        }
    } catch (err) {
        toast.error(err.message, {position: 'bottom-right'});
    }
}


export function* userSaga() {
    yield all([
        takeEvery(GET_REPOS_INIT, getRepos),
        takeEvery(GET_ORGS_INIT, getOrgs),
        takeEvery(SAVE_DATA, save),
    ]);
}