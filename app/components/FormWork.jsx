import { useState } from 'react';

import Button from './Button';
import FormRow from './FormRow';
import FormRowCalendar from './FormRowCalendar';
import Description from './FromDescription';

import { store } from '@/store';
import { setGlobalInfo } from '@/store/searchSlice';
import { createHash } from '@/utils';

import styles from './Form.module.scss';

const Form = ({ resetCardState, setJobs }) => {
  const { globalInfo } = store.getState().state;
  const [checks, setChecks] = useState({ city: false, country: false });
  const [newJobInfo, setJobInfo] = useState({ id: createHash(3) });
  const [descriptionAmount, setAmount] = useState([createHash()]);

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
      const jobs = globalInfo.jobs ? [...globalInfo.jobs] : [];

      const startDateTimestamp = newJobInfo.startDate.getTime();
      const endDateTimestamp = newJobInfo.endDate ? newJobInfo.endDate.getTime() : null;

      jobs.push({ ...newJobInfo, startDate: startDateTimestamp, endDate: endDateTimestamp });
      store.dispatch(setGlobalInfo({ jobs }));
      setJobs(jobs);
      setJobInfo({ id: createHash(3) });
      resetCardState();
    }
  };

  const handleCalendarChange = (calendar, value) => {
    if (calendar === 'current') return handleSave('currentWork', !newJobInfo.currentWork);

    if (calendar === 'startdate') return handleSave('startDate', value);

    return handleSave('endDate', value);
  };

  const handleRemoveDescription = (id) => {
    if (descriptionAmount.length > 1) {
      const newDescriptionsArray = descriptionAmount.filter((desc) => desc !== id);
      const newDescriptions = newJobInfo.description?.filter((desc) => desc.hash !== id);

      setAmount(newDescriptionsArray);
      handleSave('description', newDescriptions);
    }
  };

  const handleSaveDescriptions = (hash, value) => {
    const descriptions = newJobInfo.description ?? [];

    const alreadyExist = descriptions.find((des) => des.hash === hash);

    let newDescriptions = [...descriptions];

    if (alreadyExist) {
      newDescriptions = descriptions.map((desc) => {
        if (desc.hash === hash) return { hash, value };

        return desc;
      });
    } else {
      newDescriptions.push({ hash, value });
    }

    handleSave('description', newDescriptions);
  };

  return (
    <div className="relative">
      <div className="absolute bottom-4 right-0 px-10 w-full">
        <Button disabled={buttonDisabled} id="create" label="Create" size="full" onClick={handleCreate} />
        <Button customClasses="mt-2" id="cancel" label="Cancel" size="full" type="transparent" onClick={resetCardState} />
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
        <div className="mb-20 flex flex-col gap-2">
          <p className="pl-2 text-white">Description</p>
          {descriptionAmount.map((element) => (
            <Description
              key={`description-${element}`}
              hash={element}
              onRemove={(val) => handleRemoveDescription(val)}
              onSave={handleSaveDescriptions}
            />
          ))}
          <div className="flex justify-end">
            <Button
              id="add-description"
              label="Add"
              type="transparent"
              onClick={() => setAmount((prevValue) => [...prevValue, createHash()])}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
