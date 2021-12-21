import React  from 'react';
import './App.css';
import Componente from './component/componente.js';
import Rutas from './component/rutas';
import Ejemplo from './component/dashboard';
import Dashboard from './component/dashboard';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <>
    <Rutas/>
    </>
  );
}
export default App;
