import React from "react";
import Categories_Data from "../../CategoriesData/Categories_Data";
import "./categories.css";

const ProductCategories = ({ history }) => {
  const searchSubmitHandler = (data) => {

    history.push({
      pathname: "/products",
      state: { category: data?.category_name },
    });
    console.log(data);
  };
  const listItems = Categories_Data.map((item) => (
    <div className="containers">
      <div className="Card" key={item}>
        <img src={item.thumb} onClick={() => searchSubmitHandler(item)} />
      </div>
      <div className="content">
        <div className="title"> {item.category_name}</div>
      </div>
    </div>
  ));

  return <div className="maincontent">{listItems};</div>;
};
export default ProductCategories;
