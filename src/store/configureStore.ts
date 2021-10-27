import { createStore, applyMiddleware, EmptyObject } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from "redux-persist";
import persistedReducer from './reducers';
import rootSaga from './sagas';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { IRootState } from './reducers/types';
import { RootState } from '../components/list/types';
const configureStore = () => {
const sagaMiddleware = createSagaMiddleware();
const store:any = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
return {
store,
persistor
}
};
export default configureStore;