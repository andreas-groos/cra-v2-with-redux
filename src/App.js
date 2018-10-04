import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./store";

import TestContainer from "./containers/testContainer";

const store = configureStore();
const Context = React.createContext();
export const ContextConsumer = Context.Consumer;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Context.Provider value={{ a: 2 }}>
            <TestContainer />
          </Context.Provider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
