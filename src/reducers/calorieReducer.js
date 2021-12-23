export const calorieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HOME_TARGET':
      return {
        ...state,
        homes: {
          ...state.homes,
          target: action.target,
        },
      };
    case 'TOGGLE_START_STOP':
      return {
        ...state,
        start: !state.start,
      };
    default:
      return state;
  }
};

export const defaultState = {
  calories: 5000,
  milk: 0,
  tea: 0,
  homes: {
    target: 1000,
    visited: 0,
  },
  log: [5000, 2445, 4555, 4352, 4535, 4564, 6575],
  start: false,
};
