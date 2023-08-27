import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {
          products
          .filter((_, i) => i < 4 ) //filter all items but not the first 4, (_) dont use callback
          .map(product => <ProductCard product={product} key={product.id}/>)
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;