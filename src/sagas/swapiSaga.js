import { put, takeEvery, take, call } from "@redux-saga/core/effects";
import swapiService from "../services/swapiService";
import { setInformation } from "../reducers/swapiReducer/swapiActions";

function* setCharactersWorker() {
  const data = yield call(swapiService.getCharacters);
  yield put(setInformation(data));
}

function* setPlanetssWorker() {
  const data = yield call(swapiService.getPlanets);
  yield put(setInformation(data));
}

export function* swapiWatcher() {
  yield takeEvery("GET_CHARACTER_ASYNC", setCharactersWorker);
  yield takeEvery("GET_PLANETS_ASYNC", setPlanetssWorker);
}
