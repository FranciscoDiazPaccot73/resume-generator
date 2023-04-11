import Switch from "./Switch";

import styles from './Input.module.scss';

const Input = ({ label, switchItem, switchStatus, handleSwitch, value, name, onChange }) => {
  return (
    <label className={styles.container}>
      <div className="flex justify-between">
        <p className={`pl-2 ${switchStatus || !switchItem ? 'text-white' : 'text-gray-500'}`}>{label}</p>
        {switchItem ? <Switch onCheck={() => handleSwitch(switchItem)} checked={switchStatus} /> : null}
      </div>
      <input
        className="w-full h-10 rounded-full text-black px-3 outline-none"
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        disabled={switchItem && !switchStatus}
      />
    </label>
  )
}

export default Input;
