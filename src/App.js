import {useEffect} from 'react';
import './App.css';
import axios from "axios";
import { API_URL } from "./service/api";
import { headers } from "./helpers/headers";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Menu from './components/menu';



function App() {

  return (
    <BrowserRouter>
        <Menu />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
