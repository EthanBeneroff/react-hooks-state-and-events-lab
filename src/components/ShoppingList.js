import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const handleChange = (event) => {setSelectedCategory(event.target.value)}
  console.log(selectedCategory)

  const filteredList = items.filter(item => {
    if (selectedCategory=== "All"){
      return true;
    } else {
      return item.category === selectedCategory;
    }})


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
