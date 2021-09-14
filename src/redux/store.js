import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import persistedReducer from "./root-reducer";

const middlewares = []; //we create like this cause it's more scalable

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)