import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} from "./constants";

export const getProductList = (obj) => {
  return {
    type: GET_LIST,
    payload: {
      ...obj,
    },
  };
};

export const getProductListSuccess = (obj) => {
  return {
    type: GET_LIST_SUCCESS,
    payload: {
      ...obj,
    },
  };
};

export const getProductListFailed = (obj) => {
  return {
    type: GET_LIST_FAILED,
    payload: {
      ...obj,
    },
  };
};

export const getCategoryList = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const getCategoryListSuccess = (obj) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: {
      ...obj,
    },
  };
};

export const getCategoryListFailed = (obj) => {
  return {
    type: GET_CATEGORIES_FAILED,
    payload: {
      ...obj,
    },
  };
};
