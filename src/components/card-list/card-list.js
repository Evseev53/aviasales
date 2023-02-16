import classes from './card-list.module.scss';
import s7logo from './s7logo.svg';

export default function CardList () {
  return (
    <div className={classes.cards}>
      <div className={classes['buttons-filter']}>
        <button
          className={`${classes.button} ${classes['button-selected']} ${classes['button-left']}`}
          type="button"
        >
          <span className={`${classes.title} ${classes['title-selected']}`}>
                  Самый дешевый
          </span>
        </button>
        <button className={classes.button} type="button">
          <span className={classes.title}>
                  Самый быстрый
          </span>
        </button>
        <button
          className={`${classes.button} ${classes['button-right']}`}
          type="button"
        >
          <span className={classes.title}>
                  Оптимальный
          </span>
        </button>
      </div>
      <div className={classes.card}>
        <div className={classes['card-head']}>
          <div className={classes.price}>13 400 P</div>
          <img className={classes['card-logo']} src={s7logo} alt='logo' />
        </div>
        <div className={classes.options}>
          <div>
            <div className={classes['parameter-title']}>MOW - HKT</div>
            <div className={classes.parameter}>10:45 - 08:00</div>
          </div>
          <div>
            <div className={classes['parameter-title']}>В ПУТИ</div>
            <div className={classes.parameter}>21ч 15м</div>
          </div>
          <div>
            <div className={classes['parameter-title']}>2 ПЕРЕСАДКИ</div>
            <div className={classes.parameter}>HKG, JNB</div>
          </div>
        </div>
        <div className={classes.options}>
          <div>
            <div className={classes['parameter-title']}>MOW - HKT</div>
            <div className={classes.parameter}>10:45 - 08:00</div>
          </div>
          <div>
            <div className={classes['parameter-title']}>В ПУТИ</div>
            <div className={classes.parameter}>21ч 15м</div>
          </div>
          <div>
            <div className={classes['parameter-title']}>2 ПЕРЕСАДКИ</div>
            <div className={classes.parameter}>HKG, JNB</div>
          </div>
        </div>
      </div>
      <button
        className={`${classes.button} ${classes['button-selected']} ${classes['button-xl']}`}
        type="button">
        <span className={`${classes.title} ${classes['title-selected']}`}>
                Показать еще пять билетов
        </span>
      </button>
    </div>
  )
}