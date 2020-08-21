// redux
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// Reducers
import { userReducer } from './user/reducer';

// sagas
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);