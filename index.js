const redux = require("redux");
const createStore = redux.createStore;
// const createStore = redux.configureStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

unSubscribe();
