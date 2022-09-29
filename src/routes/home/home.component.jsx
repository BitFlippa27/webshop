import { Outlet  } from "react-router-dom";
import CategoryList from "../../components/category-list/category-list"

const Home = () => {
  
  

  return (
    <div>
      <Outlet />
      <CategoryList/>
    </div>
   
  );
}

export default Home ;
