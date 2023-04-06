'use client'

import { useState } from "react";

import FormRow from "./FormRow";

const Form = ({ info, onChange }) => {
  const [checks, setChecks] = useState({
    city: false,
    country: false,
    zipcode: false,
    phone: false,
    webpage: false,
    linkedin: false,
    twitter: false,
    instagram: false,
  })

  const handleSwitch = (name) => {
    setChecks(prevValue => ({ ...prevValue, [name]: !prevValue[name] }))
  }

  return (
    <form className="p-10 max-w-3xl mx-auto">
      <FormRow
        onChange={onChange}
        left={{ label: 'First Name', name: 'name', value: info.name }}
        right={{ label: 'Surname', name: 'surname', value: info.surname }}
      />
      <FormRow
        onChange={onChange}
        left={{ label: 'Profession', name: 'profession', value: info.profession }}
        right={{ label: 'City - State', name: 'city', value: info.city }}
        checks={{ rightSwitch: 'city', rightChecked: checks.city }}
        handleSwitch={handleSwitch}
      />
      <FormRow
        onChange={onChange}
        left={{ label: 'Email', name: 'email', value: info.email }}
        right={{ label: 'Phone', name: 'phone', value: info.phone }}
        checks={{ rightSwitch: 'phone', rightChecked: checks.phone }}
        handleSwitch={handleSwitch}
      />
      <FormRow
        onChange={onChange}
        left={{ label: 'Zip Code', name: 'zipcode', value: info.zipcode }}
        right={{ label: 'Country', name: 'country', value: info.country }}
        checks={
          { rightSwitch: 'zipcode', rightChecked: checks.zipcode, leftSwitch: 'country', leftChecked: checks.country }
        }
        handleSwitch={handleSwitch}
      />
      <FormRow
        onChange={onChange}
        left={{ label: 'Webpage', name: 'webpage', value: info.webpage }}
        right={{ label: 'Linkedin', name: 'linkedin', value: info.linkedin }}
        checks={
          { rightSwitch: 'linkedin', rightChecked: checks.linkedin, leftSwitch: 'webpage', leftChecked: checks.webpage }
        }
        handleSwitch={handleSwitch}
      />
      <FormRow
        onChange={onChange}
        left={{ label: 'Twitter', name: 'twitter', value: info.twitter }}
        right={{ label: 'Instagram', name: 'instagram', value: info.instagram }}
        checks={
          { rightSwitch: 'instagram', rightChecked: checks.instagram, leftSwitch: 'twitter', leftChecked: checks.twitter }
        }
        handleSwitch={handleSwitch}
      />
    </form>
  )
}

export default Form;
