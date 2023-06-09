import { useState } from 'react';

import Switch from './Switch';

import { store } from '@/store';
import { setGlobalInfo } from '@/store/searchSlice';

import styles from './Input.module.scss';

const Input = ({ placeholder, label, switchItem, switchStatus, handleSwitch, customSave, name }) => {
  const { globalInfo } = store.getState().state;
  const [localInfo, setLocalInfo] = useState(globalInfo[name] ?? '');

  const handleChange = (e) => {
    const { name: inputName, value } = e.target;

    if (customSave) {
      customSave(inputName, value);
    } else {
      store.dispatch(setGlobalInfo({ [inputName]: value }));
    }
    setLocalInfo(value);
  };

  return (
    <label key={name} className={styles.container}>
      <div className="flex justify-between">
        <p className={`pl-2 ${switchStatus || !switchItem ? 'text-white' : 'text-gray-500'}`}>{label}</p>
        {switchItem ? <Switch checked={switchStatus} onCheck={() => handleSwitch(switchItem)} /> : null}
      </div>
      <input
        className="w-full h-10 rounded-full text-black px-3 outline-none"
        disabled={switchItem && !switchStatus}
        name={name}
        placeholder={placeholder}
        type="text"
        value={localInfo}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
