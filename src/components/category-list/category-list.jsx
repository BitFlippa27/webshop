import "./category-list.styles.scss";
import CategoryItem from "../category-item/category-item";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default CategoryList;