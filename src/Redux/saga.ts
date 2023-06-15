import {call, put, takeEvery} from "@redux-saga/core/effects";
import {setEmail} from "./reducer";
import {ReduxStateType} from "./reduxState.type";
import {sagaActions} from "./sagaActions";

function* fetchEmailsSaga() {
  try {
    const emails: ReduxStateType = yield call(() =>
      fetch(
        "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123",
      ).then((res) => res.json()),
    );

    yield put(setEmail(emails));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_EMAIL, fetchEmailsSaga);
}
