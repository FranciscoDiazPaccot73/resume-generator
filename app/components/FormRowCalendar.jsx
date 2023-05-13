'use client';

import clsx from 'clsx';
import { useState } from 'react';

import Calendar from './Calendar';
import Switch from './Switch';

const FormRowCalendar = ({ onChange, startDate, endDate, currentWork }) => {
  const [calendarStartDate, setStartDate] = useState(new Date());
  const [calendarEndDate, setEndDate] = useState(new Date());
  const [showCalendar, setCalendarToShow] = useState();
  const dateOptions = { month: 'short', year: 'numeric' };

  const calendarClasses = 'w-full h-10 rounded-full text-black px-3 outline-none bg-white cursor-pointer flex items-center';
  const endCalendarClasses = clsx(calendarClasses, {
    'opacity-50': !startDate || currentWork,
  });

  const handleSetDate = (calendar, value) => {
    setCalendarToShow(null);

    if (calendar === 'startdate') {
      onChange('startdate', value);

      return setStartDate(new Date(value));
    }

    onChange('enddate', value);

    return setEndDate(new Date(value));
  };

  const handleCalendar = (newVal) => {
    const evalEndDate = newVal === 'enddate' && newVal === 'enddate' && !startDate;

    if (newVal === showCalendar || evalEndDate) return setCalendarToShow(null);

    return setCalendarToShow(newVal);
  };

  const handleSwitch = () => {
    onChange('current');
  };

  return (
    <div className="flex justify-between gap-4 mb-10">
      <div className="w-[250px] relative">
        <label className="text-white">
          <div className="flex justify-between">
            <p className="pl-2 text-white">Start Date</p>
          </div>
          <div className={calendarClasses} type="text" onClick={() => handleCalendar('startdate')}>
            {startDate && `${startDate.toLocaleString('en-US', dateOptions)}`}
          </div>
        </label>
        {showCalendar === 'startdate' ? <Calendar value={calendarStartDate} onChange={(val) => handleSetDate('startdate', val)} /> : null}
      </div>
      <div className="w-[250px] relative">
        <label className="text-white min-w-[250px]">
          <div className="flex justify-between">
            <p className="pl-2 text-white">End Date</p>
          </div>
          <div className={endCalendarClasses} type="text" onClick={() => handleCalendar('enddate')}>
            {endDate && `${endDate.toLocaleString('en-US', dateOptions)}`}
          </div>
        </label>
        <div className="flex justify-between mt-1">
          <p className="text-white text-xs pl-2">My current work.</p>
          <Switch checked={currentWork} onCheck={handleSwitch} />
        </div>
        {showCalendar === 'enddate' ? (
          <Calendar position="right" siblingDate={startDate} value={calendarEndDate} onChange={(val) => handleSetDate('enddate', val)} />
        ) : null}
      </div>
    </div>
  );
};

export default FormRowCalendar;
