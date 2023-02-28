import { useDispatch, useSelector } from 'react-redux';

import Card from '../card/card';
import Preloader from '../preloader/preloader';
import { addFiveTickets, sortByPrice, sortBySpeed, updateMaxId } from '../../actions';

import classes from './card-list.module.scss';

export default function CardList() {
  const { tickets, filters, loading, numOfVisible, sortTickets, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  const applyFilters = (filtersState, ticketsArr) => {
    const stopsArr = [];
    if (filtersState.nonStop) {
      stopsArr.push(0);
    }
    if (filtersState.oneStop) {
      stopsArr.push(1);
    }
    if (filtersState.twoStop) {
      stopsArr.push(2);
    }
    if (filtersState.threeStop) {
      stopsArr.push(3);
    }
    return ticketsArr.filter((ticket) => {
      const add = [];
      ticket.segments.forEach((item) => {
        stopsArr.forEach((val) => (val === item.stops.length ? add.push(true) : null));
      });
      const result = add[0] === true && add[1] === true;
      return result;
    });
  };

  const filtered = applyFilters(filters, tickets);

  const getSortedTickets = (arr) => {
    const copyArr = [...arr];
    if (sortTickets === 'byPrice') {
      return copyArr.sort((a, b) => a.price - b.price);
    }
    if (sortTickets === 'bySpeed') {
      return copyArr.sort((a, b) => {
        const getTime = (ticket) => {
          let time = 0;
          const { segments } = ticket;
          segments.forEach((segmentsItem) => {
            time += segmentsItem.duration;
          });
          return time / segments.length;
        };
        return getTime(a) - getTime(b);
      });
    }
  };

  const sortedTickets = getSortedTickets(filtered);

  const visibleTickets = sortedTickets.filter((el, idx) => idx < numOfVisible);

  const ticketsList = visibleTickets.map((ticket) => {
    return <Card key={ticket.id.toString()} ticket={ticket} />;
  });

  const onShowFive = () => {
    dispatch(addFiveTickets());
  };

  const onSort = (e) => {
    const { id } = e.target;
    switch (id) {
      case 'price':
        dispatch(sortByPrice());
        break;
      case 'speed':
        dispatch(sortBySpeed());
        break;
      default:
        return null;
    }
  };

  let price = 'button-selected';
  let priceTitle = 'title-selected';
  let speed = null;
  let speedTitle = null;

  if (sortTickets === 'byPrice') {
    price = 'button-selected';
    priceTitle = 'title-selected';
    speed = null;
    speedTitle = null;
  }
  if (sortTickets === 'bySpeed') {
    price = null;
    priceTitle = null;
    speed = 'button-selected';
    speedTitle = 'title-selected';
  }

  const message = <div className={classes.message}>Рейсов, подходящих под заданные фильтры, не найдено</div>;

  const showMoreButton = (
    <button
      className={`${classes.button} ${classes['button-selected']} ${classes['button-xl']}`}
      onClick={onShowFive}
      type="button"
    >
      <span className={`${classes.title} ${classes['title-selected']}`}>Показать еще пять билетов</span>
    </button>
  );

  return (
    <div className={classes.cards}>
      <div className={classes['buttons-sort']}>
        <button
          className={`${classes.button} ${classes[price]} ${classes['button-left']}`}
          id="price"
          onClick={onSort}
          type="button"
        >
          <span id="price" className={`${classes.title} ${classes[priceTitle]}`}>
            Самый дешевый
          </span>
        </button>
        <button
          className={`${classes.button} ${classes[speed]} ${classes['button-right']}`}
          id="speed"
          onClick={onSort}
          type="button"
        >
          <span id="speed" className={`${classes.title} ${classes[speedTitle]}`}>
            Самый быстрый
          </span>
        </button>
      </div>
      <div className={classes.preloader}>{loading.stop ? null : <Preloader />}</div>
      <div>
        {error ? (
          <p className={`${classes.message} ${classes.error}`}>Проверьте интернет соединение и обновите страницу.</p>
        ) : null}
      </div>
      <div>{ticketsList.length ? ticketsList : message}</div>
      <div>{ticketsList.length ? showMoreButton : null}</div>
    </div>
  );
}
