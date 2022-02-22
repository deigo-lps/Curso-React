import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++; //só pode mudar assim por aqui.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   switch (action.type) {
//     case "increment": {
//       let { counter, ...rest } = state;
//       return {
//         counter: state.counter + 1,
//         ...rest,
//       };
//     }
//     case "decrement": {
//       let { counter, ...rest } = state;
//       return {
//         counter: state.counter - 1,
//         ...rest,
//       };
//     }
//     case "increase": {
//       let { counter, ...rest } = state;
//       return {
//         counter: state.counter + action.value,
//         ...rest,
//       };
//     }
//     case "toggle": {
//       let{ showCounter, ...rest } = state;
//       return{
//         showCounter : !state.showCounter,
//         ...rest
//       }
//     }
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
