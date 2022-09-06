import { createAction } from "../../utils/reducers/reducers.utils";
import { USER_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) => 
  createAction(USER_ACTION_TYPES.SET_CATEGORIES, categoriesArray);


export const fetchCategoriesStart = () => 
  createAction(USER_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
  createAction(USER_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => 
  createAction(USER_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocs("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } 
  catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
}


