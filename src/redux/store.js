import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import persistedReducer from "./root-reducer";

const middlewares = [ logger ]; //we create like this cause it's more scalable

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)