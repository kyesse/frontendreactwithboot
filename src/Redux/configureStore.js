import { createStoreHook, Provider } from "react-redux";
import snackbarReducer from "../Redux/snackbar";
import { configureStore,combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  snackbar: snackbarReducer
});

const store = configureStore({reducer: reducer});

export default store;
