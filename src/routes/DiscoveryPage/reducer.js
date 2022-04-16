import {
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
} from "./constants";

const initialState = {
  productListError: false,
  productList: [],
  categoryList: [],
  categoryListError: false,
};

const discoveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return {
        ...state,
        productListError: false,
        productList: action.payload.response,
      };
    case GET_LIST_FAILED:
      return {
        ...state,
        productListError: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryListError: false,
        categoryList: action.payload.response,
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        categoryListError: true,
      };
    default:
      return state;
  }
};

export default discoveryReducer;
