import redux from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

export default store;