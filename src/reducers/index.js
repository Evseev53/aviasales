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
  ERROR,
} from '../actions';

const defaultStateFilters = {
  all: true,
  nonStop: true,
  oneStop: true,
  twoStop: true,
  threeStop: true,
};

const filters = (state = defaultStateFilters, action) => {
  switch (action.type) {
    case ALL:
      return {
        all: action.payload,
        nonStop: action.payload,
        oneStop: action.payload,
        twoStop: action.payload,
        threeStop: action.payload,
      };
    case NON_STOP:
      return {
        ...state,
        all:
          action.payload === true && state.oneStop === true && state.twoStop === true && state.threeStop === true
            ? true
            : false,
        nonStop: action.payload,
      };
    case ONE_STOP:
      return {
        ...state,
        all:
          action.payload === true && state.nonStop === true && state.twoStop === true && state.threeStop === true
            ? true
            : false,
        oneStop: action.payload,
      };
    case TWO_STOP:
      return {
        ...state,
        all:
          action.payload === true && state.nonStop === true && state.oneStop === true && state.threeStop === true
            ? true
            : false,
        twoStop: action.payload,
      };
    case THREE_STOP:
      return {
        ...state,
        all:
          action.payload === true && state.nonStop === true && state.oneStop === true && state.twoStop === true
            ? true
            : false,
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

const error = (state = false, action) => {
  if (action.type === ERROR) {
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
  error,
});

export default rootReducer;
