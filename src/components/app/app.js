import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../form/form';
import CardList from '../card-list/card-list';
import { fetchTickets, fetchSearchId, updateMaxId } from '../../actions';

import classes from './app.module.scss';
import logo from './logo.svg';

export default function App() {
  const dispatch = useDispatch();
  const { tickets, loading, searchId, maxID } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  useEffect(() => {
    if (!loading.stop && searchId) {
      dispatch(fetchTickets(searchId, maxID));
      dispatch(updateMaxId(tickets.length));
    }
  }, [tickets, searchId]);

  return (
    <div className={classes.app}>
      <div className={classes.bg}>
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
        </header>
        <main className={classes.content}>
          <Form />
          <CardList />
        </main>
      </div>
    </div>
  );
}
