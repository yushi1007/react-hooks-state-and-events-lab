import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  // this data will be passed down to the ShoppingList as a prop
  console.log(isDarkMode)

  return (
  
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
