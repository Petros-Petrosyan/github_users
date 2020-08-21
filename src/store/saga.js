// saga effects
import { all } from 'redux-saga/effects';

// sagas
import { userSaga } from './user/saga';


export function* watchSaga() {
    yield all([
        userSaga(),
    ])
}