import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <App>
        <Counter />
      </App>
    </Provider>
  )
}

export default App;