import classes from './card.module.scss';

export default function Card({ ticket }) {
  const { price, carrier, segments = [] } = ticket;
  let id = 1;
  const thereAndBack = segments.map((el) => {
    id++;
    const { stops, duration } = el;
    const date = new Date(el.date);
    const getFormatTime = (fullDate) => {
      const hours = fullDate.getHours();
      const minutes = fullDate.getMinutes();
      const formatHours = hours.toString().length < 2 ? `0${hours}` : hours;
      const formatMinutes = minutes.toString().length < 2 ? `0${minutes}` : minutes;
      return `${formatHours}:${formatMinutes}`;
    };
    const getTimeBack = (fullDate, travelTime) => {
      const d = new Date(fullDate);
      d.setMinutes(travelTime);
      return getFormatTime(d);
    };
    const getTimeByMinutes = (value) => {
      let h = 0;
      if (value > 59) {
        h = Math.floor(value / 60);
      }
      const min = value - h * 60;
      return {
        h: h,
        min: min,
      };
    };
    const time = getTimeByMinutes(el.duration);
    const getStopsTitle = (stopsArr) => {
      switch (stopsArr.length) {
        case 1:
          return '1 ПЕРЕСАДКА';
        case 2:
          return '2 ПЕРЕСАДКИ';
        case 3:
          return '3 ПЕРЕСАДКИ';
        default:
          return 'БЕЗ ПЕРЕСАДОК';
      }
    };
    const getStopsStr = (stopsArr) => {
      return stopsArr.join(', ');
    };
    return (
      <div className={classes.options} key={id.toString()}>
        <div>
          <div className={classes['parameter-title']}>{`${el.origin} - ${el.destination}`}</div>
          <div className={classes.parameter}>{`${getFormatTime(date)} - ${getTimeBack(date, duration)}`}</div>
        </div>
        <div>
          <div className={classes['parameter-title']}>В ПУТИ</div>
          <div className={classes.parameter}>{`${time.h}ч ${time.min}м`}</div>
        </div>
        <div>
          <div className={classes['parameter-title']}>{getStopsTitle(stops)}</div>
          <div className={classes.parameter}>{getStopsStr(stops)}</div>
        </div>
      </div>
    );
  });

  const getPriceFromNumber = (num) => {
    const str = num.toString();
    const arrReverse = str.split('').reverse();
    const arr = arrReverse.map((priceItem, idx) => (idx === 2 || idx === 5 ? ` ${priceItem}` : priceItem)).reverse();
    arr.push(' P');
    return arr.join('');
  };

  return (
    <div className={classes.card}>
      <div className={classes['card-head']}>
        <div className={classes.price}>{getPriceFromNumber(price)}</div>
        <img className={classes['card-logo']} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div>{thereAndBack}</div>
    </div>
  );
}
