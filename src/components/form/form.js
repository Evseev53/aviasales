import { useDispatch, useSelector } from 'react-redux';

import { addAllFilter, addNonStopFilter, addOneStopFilter, addThreeStopFilter, addTwoStopFilter } from '../../actions';

import classes from './form.module.scss';

export default function Form() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state);
  const { all, nonStop, oneStop, twoStop, threeStop } = filters;
  const onChange = (e) => {
    const { id, checked } = e.target;
    if (id === 'all') {
      dispatch(addAllFilter(checked));
    } else if (id === 'nonStop') {
      dispatch(addNonStopFilter(checked));
    } else if (id === 'oneStop') {
      dispatch(addOneStopFilter(checked));
    } else if (id === 'twoStop') {
      dispatch(addTwoStopFilter(checked));
    } else if (id === 'threeStop') {
      dispatch(addThreeStopFilter(checked));
    }
  };
  return (
    <form className={classes.form}>
      <span className={classes.title}>Количество пересадок</span>
      <label className={classes.label} htmlFor="all">
        <input className={classes.input} type="checkbox" id="all" onChange={onChange} checked={all} />
        <span className={classes.checkbox} />
        <span className={classes['label-title']}>Все</span>
      </label>
      <label className={classes.label} htmlFor="nonStop">
        <input className={classes.input} type="checkbox" id="nonStop" onChange={onChange} checked={nonStop} />
        <span className={classes.checkbox} />
        <span className={classes['label-title']}>Без пересадок</span>
      </label>
      <label className={classes.label} htmlFor="oneStop">
        <input className={classes.input} type="checkbox" id="oneStop" onChange={onChange} checked={oneStop} />
        <span className={classes.checkbox} />
        <span className={classes['label-title']}>1 пересадка</span>
      </label>
      <label className={classes.label} htmlFor="twoStop">
        <input className={classes.input} type="checkbox" id="twoStop" onChange={onChange} checked={twoStop} />
        <span className={classes.checkbox} />
        <span className={classes['label-title']}>2 пересадки</span>
      </label>
      <label className={classes.label} htmlFor="threeStop">
        <input className={classes.input} type="checkbox" id="threeStop" onChange={onChange} checked={threeStop} />
        <span className={classes.checkbox} />
        <span className={classes['label-title']}>3 пересадки</span>
      </label>
    </form>
  );
}
