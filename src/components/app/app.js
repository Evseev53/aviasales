import classes from './app.module.scss';
import logo from './logo.svg'
import s7logo from './s7logo.svg'

export default function App() {
  const allChecked = true;

  return (
    <div className={classes.app}>
      <div className={classes.bg}>
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo"/>
        </header>
        <main className={classes.content}>
          <form className={classes.form}>
            <span className={classes.title}>Количество пересадок</span>
            <label className={classes.label} htmlFor="all">
              <input className={classes.input} checked={allChecked} type="checkbox" id="all"/>
              <span className={classes.checkbox} />
              <span className={classes['label-title']}>Все</span>
            </label>
            <label className={classes.label} htmlFor="nonStop">
              <input className={classes.input} type="checkbox" id="nonStop"/>
              <span className={classes.checkbox} />
              <span className={classes['label-title']}>Без пересадок</span>
            </label>
            <label className={classes.label} htmlFor="oneStop">
              <input className={classes.input} type="checkbox" id="oneStop"/>
              <span className={classes.checkbox} />
              <span className={classes['label-title']}>1 пересадка</span>
            </label>
            <label className={classes.label} htmlFor="twoStops">
              <input className={classes.input} type="checkbox" id="twoStops"/>
              <span className={classes.checkbox} />
              <span className={classes['label-title']}>2 пересадки</span>
            </label>
            <label className={classes.label} htmlFor="threeStops">
              <input className={classes.input} type="checkbox" id="threeStops"/>
              <span className={classes.checkbox} />
              <span className={classes['label-title']}>3 пересадки</span>
            </label>
          </form>
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
        </main>
      </div>
    </div>
  )
}