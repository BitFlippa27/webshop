import { createAction } from "../../utils/reducers/reducers.utils";
import { USER_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) => 
  createAction(USER_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
