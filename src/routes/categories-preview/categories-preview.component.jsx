import { Fragment, useContext} from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesLoading } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);
  return (
    <Fragment>
      {isLoading ? (<Spinner />) :
        (Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
        
          return (
            <CategoryPreview title={title} products={products} key={title} />
          )
      }))
    }
    </Fragment>  
  )
}

export default CategoriesPreview;