const initialState = {
    isLoading: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          isLoading: action.value,
        };
      default:
        return state;
    }
  };
  
  export default reducer;