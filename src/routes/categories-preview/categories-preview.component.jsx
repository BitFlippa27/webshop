import { Fragment} from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

//render 4 products for every category
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title]; //items array
        
        return (
            <CategoryPreview title={title} products={products} key={title} />
        )
      })
    }
    </Fragment>  
  );
}

export default CategoriesPreview;