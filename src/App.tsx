import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Game from "./components/game";

const App: React.FC = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default App;
