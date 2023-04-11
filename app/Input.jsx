import Switch from "./Switch";

import { store } from "@/store";
import { setGlobalInfo } from "@/store/searchSlice";

import styles from './Input.module.scss';

const Input = ({ placeholder, label, switchItem, switchStatus, handleSwitch, value, name, onChange }) => {
  const { globalInfo } = store.getState().state;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    store.dispatch(setGlobalInfo({ [name]: value }));
  }

  return (
    <label className={styles.container} key={name}>
      <div className="flex justify-between">
        <p className={`pl-2 ${switchStatus || !switchItem ? 'text-white' : 'text-gray-500'}`}>{label}</p>
        {switchItem ? <Switch onCheck={() => handleSwitch(switchItem)} checked={switchStatus} /> : null}
      </div>
      <input
        className="w-full h-10 rounded-full text-black px-3 outline-none"
        type="text"
        value={globalInfo[name]}
        name={name}
        onChange={handleChange}
        disabled={switchItem && !switchStatus}
        placeholder={placeholder}
      />
    </label>
  )
}

export default Input;
