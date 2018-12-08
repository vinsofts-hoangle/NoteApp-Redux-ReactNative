import React, { Component } from "react";
import { Provider } from "react-redux";
import Main from "./src/Main";
import store from "./src/store/store";


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
