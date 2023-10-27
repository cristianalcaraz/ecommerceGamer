import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAppBar from "./components/Navbar"
import ItemListConteiner from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {

  return (
  <BrowserRouter>
   <ButtonAppBar/>
    <Routes>
    <Route path="/" render={() => <ItemListConteiner greeting={"bienvenidos a Gamers"}/>} />
    </Routes>
  </BrowserRouter>    
  )
}

export default App;
