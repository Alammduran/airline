import { useEffect } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Menu from "./components/menu";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  useEffect(() => {
    let st = "d2ad23";
    st.split("").forEach((element) => {
      if (/^[0-9]+$/.test(element)) {
        console.log(1);
      } else {
        console.log(2);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Menu />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
