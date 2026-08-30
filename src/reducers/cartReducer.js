const initialState = {
  carts: [],
};


function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        carts: [...state.carts, action.movieItem],
      };

    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.id),
      };

    default:
      return `Cant't find mentioned ${action.type} data`;
  }
}

export { CartReducer, initialState };
