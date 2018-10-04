import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/testActions";

export class testContainer extends Component {
  static propTypes = {
    test: PropTypes.object,
    testActions: PropTypes.object
  };

  componentDidMount = () => {
    // this.props.testActions.testAction();
    this.props.testActions.testThunk();
  };

  render() {
    return (
      <div>
        <h1>TestContainer</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test
});

const mapDispatchToProps = dispatch => {
  return {
    testActions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(testContainer);
