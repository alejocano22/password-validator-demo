import React from 'react';
import './rangeInput.css';

interface RangeInputProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeInput = ({ value, setValue }: RangeInputProps) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
  };

  return (
    <div className='range-input-container'>
      <input
        type='range'
        min='1'
        max='25'
        step='1'
        value={value}
        onChange={handleSliderChange}
      />
      <span className='range-input-value'>{value}</span>
    </div>
  );
};

export default RangeInput;
