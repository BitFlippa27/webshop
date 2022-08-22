import { useState, useEffect, createContext } from "react";
import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocs();
      setCategoriesMap(categoryMap);

    }

    getCategories();
  },[])
  const value = { categoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
