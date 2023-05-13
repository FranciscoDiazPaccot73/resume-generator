import clsx from 'clsx';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.scss';

const CalendarComponent = ({ onChange, value, position = 'left', siblingDate }) => {
  const wrapperClasses = clsx('absolute top-16', {
    [`${position}-0`]: position,
  });

  const handleChange = (val) => {
    onChange(val);
  };

  const calendarBaseProps = {
    className: styles.calendar,
    onChange: (val) => handleChange(val),
    value,
    maxDate: new Date(),
  };

  const calendarProps = siblingDate ? { ...calendarBaseProps, minDate: new Date(siblingDate) } : { ...calendarBaseProps };

  return (
    <div className={wrapperClasses}>
      <Calendar {...calendarProps} />
    </div>
  );
};

export default CalendarComponent;
