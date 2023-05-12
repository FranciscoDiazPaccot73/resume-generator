'use client'

import { store } from "@/store";
import { memo, useState } from "react";

import FormRow from "./FormRow";

import styles from './Form.module.scss';

const Form = () => {
  const { globalInfo } = store.getState().state;
  const { city, country, zipcode, phone, webpage, linkedin, twitter, instagram } = globalInfo;

  const [checks, setChecks] = useState({
    city,
    country,
    zipcode,
    phone,
    webpage,
    linkedin,
    twitter,
    instagram,
  })

  const handleSwitch = (name) => {
    setChecks(prevValue => ({ ...prevValue, [name]: !prevValue[name] }))
  }

  return (
    <form className={`p-10 max-w-4xl flex gap-6 flex-col ${styles.form}`}>
      <FormRow
        left={{ label: 'First Name', name: 'name' }}
        right={{ label: 'Surname', name: 'surname' }}
      />
      <FormRow
        left={{ label: 'Profession', name: 'profession' }}
        right={{ label: 'City - State', name: 'city' }}
        checks={{ rightSwitch: 'city', rightChecked: checks.city }}
        handleSwitch={handleSwitch}
      />
      <FormRow
        left={{ label: 'Email', name: 'email' }}
        right={{ label: 'Phone', name: 'phone' }}
        checks={{ rightSwitch: 'phone', rightChecked: checks.phone }}
        handleSwitch={handleSwitch}
      />
      <FormRow
        left={{ label: 'Zip Code', name: 'zipcode' }}
        right={{ label: 'Country', name: 'country' }}
        checks={
          { rightSwitch: 'zipcode', rightChecked: checks.zipcode, leftSwitch: 'country', leftChecked: checks.country }
        }
        handleSwitch={handleSwitch}
      />
      <FormRow
        left={{ label: 'Webpage', name: 'webpage' }}
        right={{ label: 'Linkedin', name: 'linkedin' }}
        checks={
          { rightSwitch: 'linkedin', rightChecked: checks.linkedin, leftSwitch: 'webpage', leftChecked: checks.webpage }
        }
        handleSwitch={handleSwitch}
      />
      <FormRow
        left={{ label: 'Twitter', name: 'twitter' }}
        right={{ label: 'Instagram', name: 'instagram' }}
        checks={
          { rightSwitch: 'instagram', rightChecked: checks.instagram, leftSwitch: 'twitter', leftChecked: checks.twitter }
        }
        handleSwitch={handleSwitch}
      />
    </form>
  )
}

export default memo(Form);
