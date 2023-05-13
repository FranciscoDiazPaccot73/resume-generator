'use client';

import Input from './Input';

const getPlaceholder = (name) => {
  const placeholders = {
    name: 'e.g. Joe',
    surname: 'e.g. Doe',
    profession: 'e.g. Developer',
    city: 'e.g. Santa Fe - SF',
    email: 'e.g. test@sample.com',
    phone: 'e.g. +540303456',
    zipcode: 'e.g. 3000',
    country: 'e.g. Argentina',
    webpage: 'e.g. htpps://franciscodiazpaccot.dev',
    linkedin: 'e.g. https://www.linkedin.com/in/francisco-diaz-paccot-a98a36130/',
    twitter: 'e.g. @sample',
    instagram: 'e.g. @sample',
    job: 'e.g. Sr. Software Engineer',
    employer: 'e.g. Mercado Libre',
  };

  return placeholders[name] || '';
};

const FormRow = ({ left, right, checks, handleSwitch, customSave }) => {
  const { label: leftLabel, name: leftName } = left;
  const { label: rLabel, name: rName } = right;
  const { leftSwitch, rightSwitch } = checks || {};

  return (
    <div className="flex justify-between gap-4">
      <Input
        customSave={customSave}
        handleSwitch={handleSwitch}
        label={leftLabel}
        name={leftName}
        placeholder={getPlaceholder(leftName)}
        switchItem={leftSwitch}
        switchStatus={checks?.leftChecked}
      />
      <Input
        customSave={customSave}
        handleSwitch={handleSwitch}
        label={rLabel}
        name={rName}
        placeholder={getPlaceholder(rName)}
        switchItem={rightSwitch}
        switchStatus={checks?.rightChecked}
      />
    </div>
  );
};

export default FormRow;
