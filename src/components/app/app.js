import Form from '../form/form';
import CardList from '../card-list/card-list';

import classes from './app.module.scss';
import logo from './logo.svg';

export default function App() {

  return (
    <div className={classes.app}>
      <div className={classes.bg}>
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo"/>
        </header>
        <main className={classes.content}>
          <Form />
          <CardList />
        </main>
      </div>
    </div>
  )
}