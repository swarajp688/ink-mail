import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
export default store;
