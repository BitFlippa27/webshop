import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("render/re-rednering category component");
  const isLoading = useSelector(selectCategoriesIsLoading);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]); //safeguard - categoreisMap is  empty because we invoke categoriesMap snychronously (useEffect)  before we fetch the data from the database (async)

 

  useEffect(() => {
    setProducts(categoriesMap[category]);
  },[category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (<Spinner />) : (
          <CategoryContainer>
            {products && products.map(product => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </CategoryContainer>
        )}
    </Fragment>
  );
}

export default Category;