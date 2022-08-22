import { Outlet  } from "react-router-dom";
import CategoryList from "../../components/category-list/category-list"
import Checkout from "../checkout/checkout.component";

const Home = () => {
  
  

  return (
    <div>
      <Outlet />
      <CategoryList/>
    </div>
   
  );
}

export default Home ;
