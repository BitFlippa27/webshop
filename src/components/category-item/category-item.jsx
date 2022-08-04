import "./category-item.styles.scss";

const CategoryItem = ({ category: {title, imageUrl} }) => {
  return (
    <div className="category-container">
        {/*<img/>*/}
        <div className="background-image" style={{
          backgroundImage: `url(${ imageUrl })`  //Allows to use a String variable inside a String 
        }}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now !</p>
        </div>
      </div>
  )
}

export default CategoryItem;