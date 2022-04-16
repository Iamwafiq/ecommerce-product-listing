import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCategoryListSuccess,
  getCategoryListFailed,
  getProductListSuccess,
  getProductListFailed,
} from "./actions";
import { GET_LIST, GET_CATEGORIES } from "./constants";
import { getProductListApi, getCategoryListAPi } from "../../utils/api";

function* getProductList({ payload }) {
  try {
    const res = yield call(getProductListApi, { ...payload }); //Api call by calling a function(blocking-function)
    yield put(getProductListSuccess({ response: res }));
  } catch (e) {
    yield put(getProductListFailed({ message: "failed" }));
  }
}

function* getCategoryList(dObj) {
  try {
    const res = yield call(getCategoryListAPi, {}); //Api call by calling a function(blocking-function)
    yield put(getCategoryListSuccess({ response: res }));
  } catch (e) {
    yield put(getCategoryListFailed({ message: "failed" }));
  }
}

function* discoverySaga() {
  yield takeLatest(GET_LIST, getProductList);
  yield takeLatest(GET_CATEGORIES, getCategoryList);
}

export default discoverySaga;
