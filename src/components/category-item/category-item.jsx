import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, CategoryItemContainer } from "./category-item.styles.jsx";

const CategoryItem = ({ category: {title, imageUrl, route} }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
        {/*<img/>*/}
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <p>Shop now !</p>
        </Body>
      </CategoryItemContainer>
  )
}

export default CategoryItem;