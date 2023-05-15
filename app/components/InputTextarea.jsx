import { useState } from 'react';

import styles from './Input.module.scss';

const TextArea = ({ placeholder, name, onChange }) => {
  const [localInfo, setLocalInfo] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;

    onChange(value);
    setLocalInfo(value);
  };

  return (
    <label key={name} className={styles.container}>
      <textarea
        className="w-full rounded-2xl resize-none text-black py-3 pl-3 pr-10 outline-none"
        name={name}
        placeholder={placeholder}
        rows="2"
        value={localInfo}
        onChange={handleChange}
      />
    </label>
  );
};

export default TextArea;
