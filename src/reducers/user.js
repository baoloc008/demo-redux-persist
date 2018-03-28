const initialState = {
  name: null,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        name: action.name,
        isLoggedIn: true
      };
    default:
      return state;
  }
};

export default reducer;
