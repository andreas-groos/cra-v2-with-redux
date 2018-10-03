import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./store";

import TestContainer from "./containers/testContainer";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <TestContainer />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
