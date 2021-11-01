import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import list from './list';
import list from './fleet';
import unitOverView from './unitOverview';
import unitAEEMonitor from './unitAEEMonitor';
import unitMaintenanceLog from './unitMaintenanceLog';
import AlarmReducer from './alarmReducer';

const rootReducer = combineReducers({
list, AlarmReducer, unitOverView, unitAEEMonitor, unitMaintenanceLog
});
const persistConfig = {
key: "localPersist",
storage,
whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// export type RootState = ReturnType<typeof persistReducer>;
export type RootState = ReturnType<typeof rootReducer>;
export default persistedReducer;