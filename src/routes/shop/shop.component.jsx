import { useContext } from "react";
import { CategoriesProvider, CategoriesContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        
        return <CategoryPreview title={title} products={products} />
      })
    }
    </div>  
  )
}

export default Shop;