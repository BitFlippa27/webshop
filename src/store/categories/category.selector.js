import { createRef } from "react";
import { createSelector } from "reselect";

//initial selector
const selectCategoryReducer = (state) => state.categories;

//gives back the categories array
export const selectCategories = createSelector(
  [selectCategoryReducer], // input
  (categoriesSlice) => categoriesSlice.categories // output
)
//As long as the categories array does not change do not rerun the reduce function
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items;
  
    return acc;
  }, {})
  );

  export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
  )
