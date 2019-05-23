import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <button className="increment" onClick={() => increment()}>Increment</button>
      <button className="decrement" onClick={() => decrement()}>Decrement</button>
      Current Count: <span>{count}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state.count };
}

const WrappedCounter = connect(mapStateToProps, { increment, decrement })(Counter);

// Only change code *before* me!
// -----------

const store = createStore(combineReducers({
  count: (count = 0, action) => {
    if (action.type === 'increment') {
      return count + 1;
    } else if (action.type === 'decrement') {
      return count - 1;
    } else {
      return count;
    }
  }
}));

ReactDOM.render(
  <Provider store={store}>
    <WrappedCounter />
  </Provider>,
  document.querySelector('#root')
);