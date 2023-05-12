'use client'

import { useState } from "react";

import Calendar from "./Calendar";
import Input from "./Input";


const getPlaceholder = (name) => {
  const placeholders = {
    startDate: 'Start Date',
    endDate: 'End Date',
  }

  return placeholders[name] || '';
}

const FormRowCalendar = ({ left, right, checks, handleSwitch, customSave }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { label: leftLabel, name: leftName } = left;
  const { label: rLabel, name: rName } = right;
  const { leftSwitch, rightSwitch } = checks || {};

  return (
    <div className="flex justify-between gap-4">
      <div>
        <Input
          label={leftLabel}
          switchItem={leftSwitch}
          handleSwitch={handleSwitch}
          switchStatus={checks?.leftChecked}
          name={leftName}
          placeholder={getPlaceholder(leftName)}
          customSave={customSave}
        />
        <Calendar onChange={val => console.log(val)} value={startDate} />
      </div>
      <div>
        <Input
          label={rLabel}
          switchItem={rightSwitch}
          handleSwitch={handleSwitch}
          switchStatus={checks?.rightChecked}
          name={rName}
          placeholder={getPlaceholder(rName)}
          customSave={customSave}
        />
        <Calendar onChange={val => console.log(val)} value={endDate} />
      </div>
    </div>
  )
}

export default FormRowCalendar;
