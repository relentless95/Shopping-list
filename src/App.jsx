import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { nanoid } from "nanoid";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  // console.log(items);

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  const editItem = (itemId) => {
    const newItems = items.map((items) => {
      if (itemId.id == itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }

      return item;
    });

    setItems(newItems);
    // setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
