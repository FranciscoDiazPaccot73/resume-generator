'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from './Calendar';
import Switch from './Switch';

import { toLocalString } from '@/utils';

const FormRowCalendar = ({ onChange, startDate, endDate, currentWork }) => {
  const [calendarStartDate, setStartDate] = useState(new Date());
  const [calendarEndDate, setEndDate] = useState(new Date());
  const [showCalendar, setCalendarToShow] = useState();

  const baseCalendarClasses = 'w-full h-10 rounded-full text-black px-3 outline-none cursor-pointer flex items-center';
  const startCalendarClasses = clsx(baseCalendarClasses, 'bg-white');
  const endCalendarClasses = clsx(baseCalendarClasses, !startDate || currentWork ? 'bg-gray-disabled' : 'bg-white');

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
    <div className="flex justify-between gap-4">
      <div className="w-[250px] relative">
        <label className="text-white">
          <div className="flex justify-between">
            <p className="pl-2 text-white">Start Date</p>
          </div>
          <div className={startCalendarClasses} type="text" onClick={() => handleCalendar('startdate')}>
            {startDate && `${toLocalString(startDate)}`}
            <div className="ml-auto">
              <FaRegCalendarAlt />
            </div>
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
            {endDate && `${toLocalString(endDate)}`}
            <div className="ml-auto">
              <FaRegCalendarAlt />
            </div>
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
