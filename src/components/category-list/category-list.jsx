import "./category-list.styles.jsx";
import CategoryItem from "../category-item/category-item";
import { CategoryListContainer } from "./category-list.styles.jsx";
const CategoryList = ({ categories }) => {
  return (
    <CategoryListContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </CategoryListContainer>
  )
}

export default CategoryList;