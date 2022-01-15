import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth from './auth';
import currentUser from './currentUser';
import exams from './exams'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['currentUser']
};

const rootReducer = combineReducers({ auth, currentUser, exams });

export default persistReducer(persistConfig, rootReducer);
