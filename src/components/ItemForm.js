import React, {useState} from "react";
import { v4 as uuid, v4 } from "uuid";

function ItemForm({props, onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "Food",
    category: "Produce"
  });

  function handleFormChange(event){
    //console.log(event.target.value)
    let newItem = formData;
    if (event.target.type === "select-one") {
      newItem.category = event.target.value;
    }
    else if (event.target.type === "text") {
      newItem.name = event.target.value;
    }
    setFormData(newItem);
    //console.log(newItem)
  }

  return (
    <form className="NewItem" onSubmit={event => {
        event.preventDefault();
        onItemFormSubmit({id: uuid(), ...formData})
      }}
>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
