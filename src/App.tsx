import React from "react";
import { Provider } from "react-redux";
import Home from "./components/pages/Home";
import store from "./store/ducks";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
