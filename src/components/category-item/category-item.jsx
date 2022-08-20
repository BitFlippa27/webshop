import { BackgroundImage, Body, CategoryItemContainer } from "./category-item.styles.jsx";

const CategoryItem = ({ category: {title, imageUrl} }) => {
  return (
    <CategoryItemContainer>
        {/*<img/>*/}
        <BackgroundImage imageUrl={imageUrl}/>
        <Body className="category-item-body">
          <h2>{title}</h2>
          <p>Shop now !</p>
        </Body>
      </CategoryItemContainer>
  )
}

export default CategoryItem;