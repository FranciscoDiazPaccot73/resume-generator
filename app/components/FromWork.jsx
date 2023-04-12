import { useState } from "react";

import FormRow from "./FormRow";

import styles from './Form.module.scss';

const Form = () => {
  const [checks, setChecks] = useState({city: false})

  const handleSwitch = (name) => {
    setChecks(prevValue => ({ ...prevValue, [name]: !prevValue[name] }))
  }

  return (
    <form className={`p-10 max-w-4xl flex gap-6 flex-col ${styles.form}`}>
      <FormRow
        left={{ label: 'Job Title', name: 'job' }}
        right={{ label: 'Employer', name: 'employer' }}
      />
      <FormRow
        left={{ label: 'Country', name: 'country' }}
        right={{ label: 'City - State', name: 'city' }}
        checks={{ rightSwitch: 'city', rightChecked: checks.city }}
        handleSwitch={handleSwitch}
      />
      <FormRow
        left={{ label: 'Start Date', name: 'startDate' }}
        right={{ label: 'End Date', name: 'endDate' }}
      />
    </form>
  )
}

export default Form;
