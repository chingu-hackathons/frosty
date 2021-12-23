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
      console.count('tea gifted:');
      console.group();
      console.log('state.homesVisited', state.homesVisited);
      console.log('state.homeTarget', state.homeTarget);
      console.log(state.homesVisited === state.homeTarget);
      console.groupEnd();
      if (state.calories < 110) return state;
      if (state.homesVisited === state.homeTarget) return state;
      return {
        ...state,
        calories: state.calories - 110,
        tea: state.tea + 1,
        homesVisited: state.homesVisited + 1,
        log: [...state.log, state.calories - 110],
      };
    case 'GIFT_MILK':
      console.count('milk gifted:');
      console.group();
      console.log('state.homesVisited', state.homesVisited);
      console.log('state.homeTarget', state.homeTarget);
      console.log(state.homesVisited === state.homeTarget);
      console.groupEnd();

      if (state.calories < 60) return state;
      if (state.homesVisited === state.homeTarget) return state;

      return {
        ...state,
        calories: state.calories + 15,
        milk: state.milk + 1,
        homesVisited: state.homesVisited + 1,
        log: [...state.log, state.calories + 15],
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
  log: [5000, 2445, 4555, 4352, 4535, 4564, 6575],
  start: false,
  ended: false,
};
