const counterSizeReducer = (state = 80, acton) => {
  switch (acton.type) {
    case "INCREMENT_SIZE":
      return state + 10;
    case "DECREMENT_SIZE":
      return state - 10;
    default:
      return state;
  }
};

export default counterSizeReducer;
