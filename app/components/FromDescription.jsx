import { FaRegTrashAlt } from 'react-icons/fa';

import TextArea from './InputTextarea';

const Description = ({ onSave, hash, onRemove }) => {
  const handleSave = (value) => {
    onSave(hash, value);
  };

  return (
    <div className="w-full relative">
      <TextArea name={`description-${hash}`} placeholder="Example" onChange={handleSave} />
      <div className="absolute p-3 rounded-xl cursor-pointer right-0 top-1/2 -translate-y-1/2" onClick={() => onRemove(hash)}>
        <FaRegTrashAlt />
      </div>
    </div>
  );
};

export default Description;
