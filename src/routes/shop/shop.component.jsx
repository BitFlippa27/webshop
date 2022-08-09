import { useContext } from "react";
import { ProductsProvider, ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
      <div className="products-container">
        {products.map((product, i) => 
          <ProductCard product={product} key={product.id}/>)}
    </div>    
  )
}

export default Shop;