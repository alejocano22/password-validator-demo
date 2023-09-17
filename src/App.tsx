import React, { useState } from 'react';
import './App.css';
import PasswordValidator from './PasswordValidator';
import {
  invalidRequirementColorT,
  languageT,
  requirementsArrayT,
  validRequirementColorT,
} from './PasswordValidator/types';
import { CheckboxList, OptionLayout, RangeInput } from './components';

function App() {
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showEyeIcon, setShowEyeIcon] = useState<string[]>(['eyeIcon']);
  const [minLength, setMinLength] = useState<number>(8);
  const [language, setLanguage] = useState<languageT>('en');
  const [validColor, setValidColor] = useState<validRequirementColorT>('green');
  const [invalidColor, setInvalidColor] =
    useState<invalidRequirementColorT>('red');
  const [passwordRequirements, setPasswordRequirements] =
    useState<requirementsArrayT>(['number', 'specialChar', 'uppercase']);

  const passwordRequirementsOptions: requirementsArrayT = [
    'number',
    'specialChar',
    'uppercase',
    'noConsecutiveLetters',
    'minLength',
  ];

  const languageOptions: {
    key: languageT;
    message: string;
  }[] = [
    {
      key: 'en',
      message: 'English',
    },
    {
      key: 'es',
      message: 'Spanish',
    },
  ];

  const validColorOptions: validRequirementColorT[] = ['green', 'blue'];
  const invalidColorOptions: invalidRequirementColorT[] = ['red', 'black'];

  return (
    <div className='app'>
      <section className='container'>
        <div className='password-container'>
          <h1 className='title'>Password Component</h1>
          <PasswordValidator
            requirements={passwordRequirements}
            setPasswordFn={setPassword}
            setIsValidFn={setIsValid}
            showEyeIcon={showEyeIcon.includes('eyeIcon')}
            language={language}
            validRequirementColor={validColor}
            invalidRequirementColor={invalidColor}
            minLength={
              passwordRequirements.includes('minLength') ? minLength : 1
            }
          />
        </div>
        <div className='options-container'>
          <h2 className='options-title'>Options</h2>
          <OptionLayout title='Validation requirements'>
            <CheckboxList
              options={passwordRequirementsOptions}
              activeOptions={passwordRequirements}
              setActiveOptions={setPasswordRequirements}
            />
          </OptionLayout>

          {passwordRequirements.includes('minLength') ? (
            <OptionLayout title='Minimum password length'>
              <RangeInput value={minLength} setValue={setMinLength} />
            </OptionLayout>
          ) : (
            ''
          )}

          <OptionLayout title='Show Password'>
            <CheckboxList
              options={['eyeIcon']}
              activeOptions={showEyeIcon}
              setActiveOptions={setShowEyeIcon}
            />
          </OptionLayout>

          <OptionLayout title='Language'>
            {languageOptions.map((lang) => (
              <button
                className={`option-btn ${
                  language === lang.key ? 'option-btn-selected' : ''
                }`}
                key={lang.key}
                onClick={() => setLanguage(lang.key)}
              >
                {lang.message}
              </button>
            ))}
          </OptionLayout>

          <OptionLayout title='Valid requirement color'>
            {validColorOptions.map((color) => (
              <button
                className={`option-btn ${
                  validColor === color
                    ? `option-btn-selected-${color} option-btn-selected-white-text`
                    : ''
                }`}
                key={`valid-color-${color}`}
                onClick={() => setValidColor(color)}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            ))}
          </OptionLayout>

          <OptionLayout title='Invalid requirement color'>
            {invalidColorOptions.map((color) => (
              <button
                className={`option-btn  ${
                  invalidColor === color
                    ? `option-btn-selected-${color} option-btn-selected-white-text`
                    : ''
                }`}
                key={`invalid-color-${color}`}
                onClick={() => setInvalidColor(color)}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            ))}
          </OptionLayout>
        </div>
      </section>
    </div>
  );
}

export default App;
