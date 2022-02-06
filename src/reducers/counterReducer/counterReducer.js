const counterReducer = (state = 0, acton) => {
  switch (acton.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    case "DECREMENT_COUNTER":
      return state - 1;
    case "SET_ZERO":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
