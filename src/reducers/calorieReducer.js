export const calorieReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const defaultState = {
  calories: 5000,
  milk: 0,
  tea: 0,
  homes: {
    visited: 0,
    remaining: 0,
  },
  log: [5000],
  start: false,
};
