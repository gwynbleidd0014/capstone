import "./categories.styles.scss";
import Category from "../category/category.component";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Categories;
