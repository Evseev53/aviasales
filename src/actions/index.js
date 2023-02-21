import { useDispatch, useSelector } from 'react-redux';

import { getPartTickets, getSearchId } from '../get-ticket-service/get-ticket-service';

export const ALL = 'ALL';
export const NON_STOP = 'NON_STOP';
export const ONE_STOP = 'ONE_STOP';
export const TWO_STOP = 'TWO_STOP';
export const THREE_STOP = 'THREE_STOP';

export const ADD_TICKETS = 'ADD_TICKETS';

export const TOGGLE_STOP_LOADING = 'TOGGLE_STOP_LOADING';

export const SEARCH_ID = 'SEARCH_ID';

export const ADD_FIVE_TICKETS = 'ADD_FIVE_TICKETS';

export const BY_PRICE = 'BY_PRICE';
export const BY_SPEED = 'BY_SPEED';

export const UPDATE_ID = 'UPDATE_ID';

export const addAllFilter = (payload) => ({ type: ALL, payload });
export const addNonStopFilter = (payload) => ({ type: NON_STOP, payload });
export const addOneStopFilter = (payload) => ({ type: ONE_STOP, payload });
export const addTwoStopFilter = (payload) => ({ type: TWO_STOP, payload });
export const addThreeStopFilter = (payload) => ({ type: THREE_STOP, payload });
export const addTickets = (payload) => ({ type: ADD_TICKETS, payload });
export const toggleStopLoading = (payload) => ({ type: TOGGLE_STOP_LOADING, payload });
export const addSearchId = (payload) => ({ type: SEARCH_ID, payload });
export const addFiveTickets = (payload) => ({ type: ADD_FIVE_TICKETS, payload });
export const sortByPrice = (payload) => ({ type: BY_PRICE, payload });
export const sortBySpeed = (payload) => ({ type: BY_SPEED, payload });
export const updateMaxId = (payload) => ({ type: UPDATE_ID, payload });

export const fetchTickets = (idSearch, maxID) => {
  return (dispatch) => {
    getPartTickets(idSearch).then((json) => {
      const { tickets, stop } = json;
      let ticketID = maxID;
      const ticketsWithIDs = tickets.map((ticket) => {
        const copy = { ...ticket };
        ticketID += 1;
        copy.id = ticketID;
        return copy;
      });
      dispatch(toggleStopLoading(stop));
      dispatch(addTickets(ticketsWithIDs));
    });
  };
};

export const fetchSearchId = () => {
  return (dispatch) => {
    getSearchId().then((id) => {
      dispatch(addSearchId(id));
    });
  };
};
