import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  console.log(list);
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to your list");
  };

  // console.log(items);

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id == itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }

      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} position="top-center" />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
}

export default App;
