import React from 'react';
import './checkboxList.css';

export interface CheckboxListProps {
  options: string[];
  activeOptions: string[];
  setActiveOptions: React.Dispatch<React.SetStateAction<any[]>>;
}

const CheckboxList = ({
  options,
  activeOptions,
  setActiveOptions,
}: CheckboxListProps) => {
  const handleCheckboxChange = (value: string) => {
    const updatedSelection = [...activeOptions];

    if (activeOptions.includes(value)) {
      const index = updatedSelection.indexOf(value);
      updatedSelection.splice(index, 1);
    } else {
      updatedSelection.push(value);
    }

    setActiveOptions(updatedSelection);
  };

  return (
    <div className='checkbox-list'>
      {options.map((option) => (
        <label key={`checkbox-option-${option}`}>
          <input
            type='checkbox'
            value={option}
            checked={activeOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
