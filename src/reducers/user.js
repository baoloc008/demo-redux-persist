const initialState = {
  name: null,
  isLoggedIn: false,
  isSaveState: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        name: action.name,
        isLoggedIn: true
      };
    case 'TOGGLE_SAVE_STATE':
      return {
        ...state,
        isSaveState: !state.isSaveState
      };
    default:
      return state;
  }
};

export default reducer;
