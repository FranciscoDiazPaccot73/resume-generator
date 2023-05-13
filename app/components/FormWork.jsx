import { useState } from 'react';

import { store } from '@/store';

import Button from './Button';
import FormRow from './FormRow';
import FormRowCalendar from './FormRowCalendar';

import styles from './Form.module.scss';

const Form = () => {
  const { globalInfo } = store.getState().state;
  const [checks, setChecks] = useState({ city: false, country: false });
  const [newJobInfo, setJobInfo] = useState({ id: globalInfo.jobs?.length ? globalInfo.jobs?.length + 1 : 1 });

  const buttonDisabled =
    !newJobInfo.job || !newJobInfo.employer || !newJobInfo.startDate || (!newJobInfo.endDate && !newJobInfo.currentWork);

  const handleSwitch = (name) => {
    setChecks((prevValue) => ({ ...prevValue, [name]: !prevValue[name] }));
  };

  const handleSave = (name, value) => {
    setJobInfo({ ...newJobInfo, [name]: value });
  };

  const handleCreate = () => {
    if (!buttonDisabled) {
      console.log(newJobInfo);
    }
  };

  const handleCalendarChange = (calendar, value) => {
    if (calendar === 'current') return handleSave('currentWork', !newJobInfo.currentWork);

    if (calendar === 'startdate') return handleSave('startDate', value);

    return handleSave('endDate', value);
  };

  return (
    <div className="relative">
      <div className="absolute bottom-4 right-0 px-10 w-full">
        <Button disabled={buttonDisabled} id="create" label="Create" size="full" onClick={handleCreate} />
      </div>
      <form className={`p-10 max-w-4xl flex gap-6 flex-col ${styles.form}`}>
        <FormRow customSave={handleSave} left={{ label: 'Job Title', name: 'job' }} right={{ label: 'Employer', name: 'employer' }} />
        <FormRow
          checks={{ rightSwitch: 'city', rightChecked: checks.city, leftSwitch: 'country', leftChecked: checks.country }}
          customSave={handleSave}
          handleSwitch={handleSwitch}
          left={{ label: 'Country', name: 'country' }}
          right={{ label: 'City - State', name: 'city' }}
        />
        <FormRowCalendar
          currentWork={newJobInfo.currentWork}
          endDate={newJobInfo.endDate}
          startDate={newJobInfo.startDate}
          onChange={handleCalendarChange}
        />
      </form>
    </div>
  );
};

export default Form;
