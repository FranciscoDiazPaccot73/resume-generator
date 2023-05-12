import { useState } from "react";

import { store } from "@/store";

import Button from "./Button";
import FormRow from "./FormRow";
import FormRowCalendar from "./FormRowCalendar";

import styles from './Form.module.scss';

const Form = () => {
  const { globalInfo } = store.getState().state;
  const [checks, setChecks] = useState({ city: false, country: false })
  const [newJobInfo, setJobInfo] = useState({ id: globalInfo.jobs?.length ? globalInfo.jobs?.length + 1 : 1 })

  const buttonDisabled = !newJobInfo.job || !newJobInfo.employer || !newJobInfo.startDate || !newJobInfo.endDate;

  const handleSwitch = (name) => {
    setChecks(prevValue => ({ ...prevValue, [name]: !prevValue[name] }))
  }

  const handleSave = (name, value) => {
    setJobInfo({ ...newJobInfo, [name]: value })
  }

  const handleCreate = () => {
    if (!buttonDisabled) {
      
    }
  }
  
  return (
    <div className="relative">
      <div className="absolute bottom-4 right-4">
        <Button disabled={buttonDisabled} id="create" onClick={handleCreate} label='Create' />
      </div>
      <form className={`p-10 max-w-4xl flex gap-6 flex-col ${styles.form}`}>
        <FormRow
          left={{ label: 'Job Title', name: 'job' }}
          right={{ label: 'Employer', name: 'employer' }}
          customSave={handleSave}
        />
        <FormRow
          left={{ label: 'Country', name: 'country' }}
          right={{ label: 'City - State', name: 'city' }}
          checks={{ rightSwitch: 'city', rightChecked: checks.city, leftSwitch: 'country', leftChecked: checks.country }}
          handleSwitch={handleSwitch}
          customSave={handleSave}
        />
        <FormRowCalendar
          left={{ label: 'Start Date', name: 'startDate' }}
          right={{ label: 'End Date', name: 'endDate' }}
          customSave={handleSave}
        />
      </form>
    </div>
  )
}

export default Form;
