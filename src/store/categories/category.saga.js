import { takeLatest, all, call, put, take } from "redux-saga/effects";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types"


function* fetchCategoriesAsync() {
  try {
    //as async await
    const categoriesArray = yield call(getCategoriesAndDocs, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } 
  catch (error) {
    //as dispatch
    yield put((fetchCategoriesFailed(error)));
  }
}

export function* onFetchCategories() {
  //takes just the latest action if multiple same actions happened before and cancels previous ones
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync); 
}

export function* categoriesSaga() {
  //Saga aggregator listens to sagas
  yield all([call(onFetchCategories)]);
}