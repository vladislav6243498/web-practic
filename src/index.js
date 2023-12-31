import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reducer";
import "./18n";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
