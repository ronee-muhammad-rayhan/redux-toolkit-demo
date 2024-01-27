const redux = require("redux");
// import { bindActionCreators } from "redux";
const createStore = redux.createStore;
const bindActonCreators = redux.bindActionCreators;
// const createStore = redux.configureStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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
const orderIceCream = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
};
const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const initialState = {
  numberOfCakes: 10,
  numberOfIceCream: 30,
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
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + action.payload,
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

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActonCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unSubscribe();
