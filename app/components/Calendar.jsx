import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.scss';

const  CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar className={styles.calendar} onChange={onChange} value={value} maxDate={new Date()} />
    </div>
  );
}

export default CalendarComponent;
