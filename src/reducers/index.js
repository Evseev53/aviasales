import { combineReducers } from 'redux';

import {
  ALL,
  NON_STOP,
  ONE_STOP,
  TWO_STOP,
  THREE_STOP,
  ADD_TICKETS,
  TOGGLE_STOP_LOADING,
  SEARCH_ID,
  ADD_FIVE_TICKETS,
  BY_SPEED,
  BY_PRICE,
  UPDATE_ID,
} from '../actions';

const defaultStateFilters = {
  all: true,
  nonStop: false,
  oneStop: true,
  twoStop: true,
  threeStop: true,
};

const filters = (state = defaultStateFilters, action) => {
  switch (action.type) {
    case ALL:
      return {
        all: action.payload,
        nonStop: false,
        oneStop: action.payload,
        twoStop: action.payload,
        threeStop: action.payload,
      };
    case NON_STOP:
      return {
        all: false,
        nonStop: action.payload,
        oneStop: false,
        twoStop: false,
        threeStop: false,
      };
    case ONE_STOP:
      return {
        ...state,
        all: action.payload === true && state.twoStop === true && state.threeStop === true ? true : false,
        nonStop: false,
        oneStop: action.payload,
      };
    case TWO_STOP:
      return {
        ...state,
        all: action.payload === true && state.oneStop === true && state.threeStop === true ? true : false,
        nonStop: false,
        twoStop: action.payload,
      };
    case THREE_STOP:
      return {
        ...state,
        all: action.payload === true && state.oneStop === true && state.twoStop === true ? true : false,
        nonStop: false,
        threeStop: action.payload,
      };
    default:
      return state;
  }
};

const tickets = (state = [], action) => {
  if (action.type === ADD_TICKETS) {
    return [...state, ...action.payload];
  }
  return state;
};

const loading = (state = { stop: false }, action) => {
  if (action.type === TOGGLE_STOP_LOADING) {
    return { stop: action.payload };
  }
  return state;
};

const searchId = (state = null, action) => {
  if (action.type === SEARCH_ID) {
    return action.payload;
  }
  return state;
};

const numOfVisible = (state = 5, action) => {
  if (action.type === ADD_FIVE_TICKETS) {
    return state + 5;
  }
  return state;
};

const sortTickets = (state = 'byPrice', action) => {
  if (action.type === BY_PRICE) {
    return 'byPrice';
  }
  if (action.type === BY_SPEED) {
    return 'bySpeed';
  }
  return state;
};

const maxID = (state = 0, action) => {
  if (action.type === UPDATE_ID) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  filters,
  tickets,
  loading,
  searchId,
  numOfVisible,
  sortTickets,
  maxID,
});

export default rootReducer;
