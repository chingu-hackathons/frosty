export const calorieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HOME_TARGET':
      return {
        ...state,
        homeTarget: parseInt(action.target),
      };
    case 'TOGGLE_START_STOP':
      if (state.start) {
        return defaultState;
      }
      return {
        ...state,
        start: !state.start,
      };
    case 'GIFT_TEA':
      if (
        state.calories < 60 ||
        state.homesVisited === state.homeTarget ||
        state.ended === true
      ) {
        return {
          ...state,
          ended: true,
        };
      }

      return {
        ...state,
        calories: state.calories - 110,
        tea: state.tea + 1,
        homesVisited: state.homesVisited + 1,
        log: [...state.log, state.calories - 110],
        time: state.calories < 5000 ? state.time + 0.1 : state.time + 0.2,
      };
    case 'GIFT_MILK':
      if (
        state.calories < 60 ||
        state.homesVisited === state.homeTarget ||
        state.ended === true
      ) {
        return {
          ...state,
          ended: true,
        };
      }

      return {
        ...state,
        calories: state.calories + 15,
        milk: state.milk + 1,
        homesVisited: state.homesVisited + 1,
        log: [...state.log, state.calories + 15],
        time: state.calories < 5000 ? state.time + 0.1 : state.time + 0.2,
      };
    case 'END':
      return {
        ...state,
        ended: true,
      };

    default:
      return state;
  }
};

export const defaultState = {
  calories: 5000,
  milk: 0,
  tea: 0,
  homeTarget: 1000,
  homesVisited: 0,
  log: [5000],
  start: false,
  ended: false,
  time: 0,
};
