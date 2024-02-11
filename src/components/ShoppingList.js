import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import uuid from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  
  const [displayedItems, setItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  }

  const itemsToDisplay = displayedItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });
  
  const itemsSearched = itemsToDisplay.filter((item) => item.name.includes(searchText));

  function handleSearchChange(targetText){
    setSearchText(targetText);
    //console.log(searchText);
  }

  function handleItemFormSubmit(newItem){
    setItems([...displayedItems, newItem])
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        search={searchText}
        onSearchChange={handleSearchChange} 
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsSearched.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
