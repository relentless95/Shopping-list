import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem }) => {
  //   console.log("here in Items--->", items);
  return (
    <div className="items">
      {items.map((item) => {
        // console.log(item);
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default Items;
