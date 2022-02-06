import { swapiWatcher } from "./swapiSaga";

function* rootSaga() {
  yield swapiWatcher();
}

export default rootSaga;
