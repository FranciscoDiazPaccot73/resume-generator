import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.scss';

const  CalendarComponent = ({ onChange, value }) => {
  const handleChange = (val) => {
    onChange(val)
  }

  return (
    <div>
      <Calendar className={styles.calendar} onChange={handleChange} value={value} maxDate={new Date()} />
    </div>
  );
}

export default CalendarComponent;
