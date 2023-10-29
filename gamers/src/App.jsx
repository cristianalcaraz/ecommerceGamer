import { useState } from 'react';
import './App.css';
import ButtonAppBar from "./components/Navbar";
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {

  const [quantity, setQuantity] = useState(0)
  return (
    <BrowserRouter>
      <ButtonAppBar quantity={quantity}/>
      <Routes>
        <Route path="/" element={<ItemListConteiner greeting={"bienvenidos a Gamers"}/>} />
      </Routes>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => setQuantity(quantity)}/>
    </BrowserRouter>    
  );
}

export default App;
