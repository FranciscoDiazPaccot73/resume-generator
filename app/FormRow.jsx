'use client'

import Input from "./Input";

const FormRow = ({ onChange, left, right, checks, handleSwitch }) => {
  const { label: leftLabel, name: leftName, value: leftValue = '' } = left;
  const { label: rLabel, name: rName, value: rValue = '' } = right;
  const { leftSwitch, rightSwitch } = checks || {};

  return (
    <div className="flex justify-between gap-4">
      <Input 
        label={leftLabel}
        switchItem={leftSwitch}
        handleSwitch={handleSwitch}
        switchStatus={checks?.leftChecked}
        value={leftValue}
        name={leftName}
        onChange={onChange}
      />
      <Input
        label={rLabel}
        switchItem={rightSwitch}
        handleSwitch={handleSwitch}
        switchStatus={checks?.rightChecked}
        value={rValue}
        name={rName}
        onChange={onChange}
      />
    </div>
  )
}

export default FormRow;
