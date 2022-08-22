import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]); //safeguard - categoreisMap is  empty because we invoking categoreisMap (snychronously) before we fetch the data from the database (async)

  useEffect(() => {
    setProducts(categoriesMap[category]);
  },[category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
      {products && products.map(product => <ProductCard product={product} key={product.id}/>)}
      </CategoryContainer>
    </Fragment>
   
  )
}

export default Category;