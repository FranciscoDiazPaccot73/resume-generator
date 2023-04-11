'use client'

import Input from "./Input";

const getPlaceholder = (name) => {
  const placeholders = {
    name: 'e.g. Joe',
    surname: 'e.h. Doe',
    profession: "e.g. Developer",
    city: "e.g. Santa Fe - SF",
    email: 'e.g. test@sample.com',
    phone: 'e.g. +540303456',
    zipcode: "e.g. 3000",
    country: 'e.g. Argentina',
    webpage: 'e.g. htpps://franciscodiazpaccot.dev',
    linkedin: "e.g. https://www.linkedin.com/in/francisco-diaz-paccot-a98a36130/",
    twitter: 'e.g. @sample',
    instagram: 'e.g. @sample',
  }

  return placeholders[name] || '';
}

const FormRow = ({ left, right, checks, handleSwitch }) => {
  const { label: leftLabel, name: leftName } = left;
  const { label: rLabel, name: rName } = right;
  const { leftSwitch, rightSwitch } = checks || {};

  return (
    <div className="flex justify-between gap-4">
      <Input
        label={leftLabel}
        switchItem={leftSwitch}
        handleSwitch={handleSwitch}
        switchStatus={checks?.leftChecked}
        name={leftName}
        placeholder={getPlaceholder(leftName)}
      />
      <Input
        label={rLabel}
        switchItem={rightSwitch}
        handleSwitch={handleSwitch}
        switchStatus={checks?.rightChecked}
        name={rName}
        placeholder={getPlaceholder(rName)}
      />
    </div>
  )
}

export default FormRow;
