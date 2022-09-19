import { takeLatest, all, call, put, take } from "redux-saga/effects";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types"


function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocs, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } 
  catch (error) {
    yield put((fetchCategoriesFailed(error)));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}