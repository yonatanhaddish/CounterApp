import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCounter, decreaseCounter, resetCounter} from '../../actions/index';

const styles = {
  margin: "2px"
};

class CounterComp extends PureComponent {
  render() {
    return (
      <div> 
        <h1> Counter : {this.props.count}</h1>
        <button onClick={this.props.handleIncrease} style={styles}> Increase Counter </button>
        <button onClick={this.props.handleDecrease} style={styles}> Decrease Counter </button>
        <button onClick={this.props.handleReset} style={styles}> Reset Counter </button>
      </div>
    )
  }
}

function mappedStateWithProps(state) {
  return {
    count: state.counter.count,
  }
}

function mappedDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCounter,
    handleDecrease: decreaseCounter,
    handleReset: resetCounter,
  }, dispatch)
}

export default connect(mappedStateWithProps, mappedDispatchToProps)(CounterComp);