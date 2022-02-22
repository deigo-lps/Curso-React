import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case "increment": {
      let { counter, ...rest } = state;
      return {
        counter: state.counter + 1,
        ...rest,
      };
    }
    case "decrement": {
      let { counter, ...rest } = state;
      return {
        counter: state.counter - 1,
        ...rest,
      };
    }
    case "increase": {
      let { counter, ...rest } = state;
      return {
        counter: state.counter + action.value,
        ...rest,
      };
    }
    case "toggle": {
      let{ showCounter, ...rest } = state;
      return{
        showCounter : !state.showCounter,
        ...rest
      }
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
