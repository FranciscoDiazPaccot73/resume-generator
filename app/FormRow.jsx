'use client'

import Switch from "./Switch";

const FormRow = ({ onChange, left, right, checks, handleSwitch }) => {
  const { label: leftLabel, name: leftName, value: leftValue = '' } = left;
  const { label: rLabel, name: rName, value: rValue = '' } = right;
  const { leftSwitch, rightSwitch } = checks || {};

  return (
    <div className="flex justify-between">
      <label className="text-white w-5/12">
        <div className="flex justify-between">
          <p>{leftLabel}</p>
          {leftSwitch ? <Switch onCheck={() => handleSwitch(leftSwitch)} checked={checks.leftChecked} /> : null}
        </div>
        <input
          className="w-full"
          type="text"
          value={leftValue}
          name={leftName}
          onChange={onChange}
          disabled={leftSwitch && !checks.leftChecked}
        />
      </label>
      <label className="text-white w-5/12">
        <div className="flex justify-between">
          <p>{rLabel}</p>
          {rightSwitch ? <Switch onCheck={() => handleSwitch(rightSwitch)} checked={checks.rightChecked} /> : null}
        </div>
        <input
          className="w-full"
          type="text"
          value={rValue}
          name={rName}
          onChange={onChange}
          disabled={rightSwitch && !checks.rightChecked}
        />
      </label>
    </div>
  )
}

export default FormRow;
