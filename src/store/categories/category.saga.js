import { takeLatest, all, call, put } from "redux-saga/effects"; 
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types"


function* fetchCategoriesAsync() {
  //as async await
  try {
    const categoriesArray = yield call(getCategoriesAndDocs, "categories"); //call -> turn function into effect
    yield put(fetchCategoriesSuccess(categoriesArray)); //dispatch
  } 
  catch (error) {
    yield put((fetchCategoriesFailed(error)));
  }
}

//LISTENER: the moment you hear FETCH_CATEGORIES_START run async code
export function* onFetchCategories() {
  //takes just the latest action if multiple same actions happened before and cancels previous ones
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync); 
}

export function* categoriesSaga() {
  //Saga aggregator listens to sagas
  //pauses at yield
  //completes when everything is done like Promise.all
  yield all([call(onFetchCategories)]);
}