import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Menu from "./components/menu";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Menu />
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
