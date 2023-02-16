import { combineReducers } from 'redux';

const ALL = 'ALL';
const NON_STOP = 'NON_STOP';
const ONE_STOP = 'ONE_STOP';
const TWO_STOP = 'TWO_STOP';
const THREE_STOP = 'THREE_STOP';


const defaultState = {
  all: true,
  nonStop: false,
  oneStop: true,
  twoStop: true,
  threeStop: true
};

const filters = (state = defaultState, action) => {
  switch (action.type){
  case ALL:
    return {
      all: action.payload,
      nonStop: false,
      oneStop: action.payload,
      twoStop: action.payload,
      threeStop: action.payload
    }
  case NON_STOP:
    return {
      all: false,
      nonStop: action.payload,
      oneStop: false,
      twoStop: false,
      threeStop: false
    }
  case ONE_STOP:
    return {
      ...state,
      all: action.payload === true && state.twoStop === true && state.threeStop === true ? true : false,
      nonStop: false,
      oneStop: action.payload
    }

  case TWO_STOP:
    return {
      ...state,
      all: action.payload === true && state.oneStop === true && state.threeStop === true ? true : false,
      nonStop: false,
      twoStop: action.payload
    }

  case THREE_STOP:
    return {
      ...state,
      all: action.payload === true && state.oneStop === true && state.twoStop === true ? true : false,
      nonStop: false,
      threeStop: action.payload
    }

  default: return state
  }
};

export const rootReducer = combineReducers({
  filters
})

export const addAllFilter = (payload) => ({ type: ALL, payload })
export const addNonStopFilter = (payload) => ({ type: NON_STOP, payload })
export const addOneStopFilter = (payload) => ({ type: ONE_STOP, payload })
export const addTwoStopFilter = (payload) => ({ type: TWO_STOP, payload })
export const addThreeStopFilter = (payload) => ({ type: THREE_STOP, payload })