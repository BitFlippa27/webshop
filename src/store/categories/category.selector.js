import { createSelector } from "reselect"; 
//uses Memoization (Same input === Same output, caching result and using it when input didnt change without running the function)
//tackles the re render battles in React

//initial selector, get state
const selectCategoryReducer = (state) => state.categories;

//gives back the categories array
export const selectCategories = createSelector(
  [selectCategoryReducer], // input
  (categoriesReducer) => categoriesReducer.categories // output, runs just when value from selector changes (selectCategoryReducer => state.categories)
)
//As long as the categories array does not change do not rerun the reduce function
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
  
    return acc;
  }, {})
  );

  export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesReducer) => categoriesReducer.isLoading
  )
