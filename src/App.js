import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./store";

import "./styles/dist/semantic.min.css";
import { Button } from "semantic-ui-react";

import TestContainer from "./containers/testContainer";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <TestContainer />
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
