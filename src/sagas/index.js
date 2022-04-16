import { fork, all } from "redux-saga/effects";
import discoverySaga from "../routes/DiscoveryPage/saga";

export default function* rootSaga() {
  yield all([fork(discoverySaga)]);
}
