import {useEffect} from 'react';
import './App.css';
import axios from "axios";
import { API_URL } from "./service/api";
import { headers } from "./helpers/headers";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Menu from './components/menu';



function App() {

useEffect(() => {
  axios
  .get(
    API_URL + "api/get-cities",
    { headers: headers }
  )
  .then((res) => {
    console.log(1)
  })
  .catch((err) => {
    console.log(err);
  });
}, []);
  return (
    <BrowserRouter>
        <Menu />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
