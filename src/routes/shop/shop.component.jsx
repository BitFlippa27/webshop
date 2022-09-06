import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();
  console.log("SHOP")

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocs("categories");
      dispatch(setCategories(categoriesArray));
    }

    getCategories();
  },[])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />} />
    </Routes>    
  )
}

export default Shop;