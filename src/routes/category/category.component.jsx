import { useContext, useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap, selectCategoriesLoading } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]); //safeguard - categoreisMap is  empty because we invoking categoreisMap (snychronously) before we fetch the data from the database (async)

  useEffect(() => {
    setProducts(categoriesMap[category]);
  },[category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? (<Spinner />) :
          (<CategoryContainer>
          {products && products.map(product => <ProductCard product={product} key={product.id}/>)}
          </CategoryContainer>)
      }
      
    </Fragment>
  )
}

export default Category;