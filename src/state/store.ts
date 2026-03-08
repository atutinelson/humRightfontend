import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api";


const rootReducer = combineReducers({
 
  [api.reducerPath]: api.reducer,
});

const makeStore =() => {
return configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), // Add your custom middleware here
});
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default makeStore;