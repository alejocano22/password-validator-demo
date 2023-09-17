import React, { useState } from 'react';
import './passwordValidator.css';
import createRequirementsOptions from './utils/requirementsOptions';
import { PasswordValidationProps } from './types';
import { EyeIcon, EyeSlashIcon } from './Icons';

const PasswordValidator = ({
  requirements,
  placeholder = 'Enter your password',
  setPasswordFn,
  setIsValidFn,
  showEyeIcon,
  language = 'en',
  validRequirementColor = 'green',
  invalidRequirementColor = 'red',
  minLength = 1,
}: PasswordValidationProps) => {
  const [password, setPassword] = useState<string>('');
  const [validRequirements, setValidRequirements] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const requirementsOptions = createRequirementsOptions(minLength);

  const validatePassword = (password: string) => {
    const newValidRequirements: string[] = [];

    if (password.trim() !== '') {
      requirements.forEach((req) => {
        if (requirementsOptions[req].regex.test(password)) {
          newValidRequirements.push(req);
        }
      });
    }
    setValidRequirements(newValidRequirements);

    if (typeof setIsValidFn === 'function') {
      setIsValidFn(checkAllValidations(newValidRequirements));
    }
  };

  const checkAllValidations = (newValidRequirements: string[]): boolean => {
    return newValidRequirements.length === requirements.length;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (typeof setPasswordFn === 'function') setPasswordFn(newPassword);
    validatePassword(newPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='password-validator-container'>
      <div className='password-validator-input-container'>
        <input
          id='password-validator-input'
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={password}
          onChange={handleChange}
          className='password-validator-input'
        />
        {showEyeIcon ? (
          <button
            className='password-validator-toggle-button'
            onClick={toggleShowPassword}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        ) : (
          ''
        )}
      </div>
      <ul className='password-validator-requirements-list'>
        {requirements.map((req) => {
          const isValid = validRequirements.includes(req);
          return (
            <li key={req} className='password-validator-requirements-item'>
              <span
                className={`password-validator-requirements-item-icon ${
                  isValid
                    ? `password-validator-item-icon-bg-${validRequirementColor}`
                    : `password-validator-item-icon-bg-${invalidRequirementColor}`
                }`}
              >
                {isValid ? '✔' : '✖'}
              </span>
              {requirementsOptions[req].message[language]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordValidator;
