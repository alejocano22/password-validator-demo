import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordValidator from './index';
import { requirementsArrayT } from './types';

test('Renders the password input', () => {
  render(<PasswordValidator requirements={[]} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('Renders all the available options', () => {
  const requirementOptions: requirementsArrayT = [
    'number',
    'specialChar',
    'uppercase',
    'noConsecutiveLetters',
    'minLength',
  ];
  render(<PasswordValidator requirements={requirementOptions} minLength={8} />);

  const numberText = screen.getByText('Has a number 0-9');
  const specialCharText = screen.getByText('Has a special char !@#$%^&*');
  const uppercaseText = screen.getByText('Has a uppercase letter');
  const noConsecutiveLettersText = screen.getByText(
    'Has no consecutive letters'
  );
  const minLengthText = screen.getByText('Has a minimum length of 8');
  expect(numberText).toBeInTheDocument();
  expect(specialCharText).toBeInTheDocument();
  expect(uppercaseText).toBeInTheDocument();
  expect(noConsecutiveLettersText).toBeInTheDocument();
  expect(minLengthText).toBeInTheDocument();
});

test('Check number validation - valid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['number'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '4444' } });

  const expectedStatusText = screen.getByText('Status: valid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check number validation - invalid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['number'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'AAAA' } });

  const expectedStatusText = screen.getByText('Status: invalid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check special char validation - valid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['specialChar'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '*!' } });

  const expectedStatusText = screen.getByText('Status: valid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check special char validation - invalid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['specialChar'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'a22' } });

  const expectedStatusText = screen.getByText('Status: invalid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check uppercase validation - valid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['uppercase'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'ABCD' } });

  const expectedStatusText = screen.getByText('Status: valid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check uppercase validation - invalid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['uppercase'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'abcd' } });

  const expectedStatusText = screen.getByText('Status: invalid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check no consecutive letters validation - valid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['noConsecutiveLetters'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'a2*a' } });

  const expectedStatusText = screen.getByText('Status: valid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check no consecutive letters validation - invalid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['noConsecutiveLetters'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'aa2*a' } });

  const expectedStatusText = screen.getByText('Status: invalid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check minimum length validation - valid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['minLength'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          minLength={8}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '12345678' } });

  const expectedStatusText = screen.getByText('Status: valid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check minimum length validation - invalid', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = ['minLength'];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          minLength={8}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '1234' } });

  const expectedStatusText = screen.getByText('Status: invalid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check test case password (a2*!A2*b) with all validations', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = [
      'number',
      'specialChar',
      'uppercase',
      'noConsecutiveLetters',
      'minLength',
    ];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          minLength={8}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'a2*!A2*b' } });

  const expectedStatusText = screen.getByText('Status: valid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Check test case password (aa2*!A2*b) with all validations', () => {
  const ParentComponent = () => {
    const [isValid, setIsValid] = useState(false);
    const requirementOptions: requirementsArrayT = [
      'number',
      'specialChar',
      'uppercase',
      'noConsecutiveLetters',
      'minLength',
    ];
    return (
      <div>
        <PasswordValidator
          requirements={requirementOptions}
          minLength={8}
          setIsValidFn={setIsValid}
        />
        <h1>Status: {isValid ? 'valid' : 'invalid'}</h1>
      </div>
    );
  };
  render(<ParentComponent />);

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'aa2*!A2*b' } });

  const expectedStatusText = screen.getByText('Status: invalid');
  expect(expectedStatusText).toBeInTheDocument();
});

test('Renders the password validator component - spanish version', () => {
  const requirementOptions: requirementsArrayT = [
    'number',
    'specialChar',
    'uppercase',
    'noConsecutiveLetters',
    'minLength',
  ];
  render(
    <PasswordValidator
      requirements={requirementOptions}
      minLength={8}
      language='es'
    />
  );

  const numberText = screen.getByText('Tener un numero 0-9');
  const specialCharText = screen.getByText(
    'Tener un caracter especial !@#$%^&*'
  );
  const uppercaseText = screen.getByText('Tener una letra mayuscula');
  const noConsecutiveLettersText = screen.getByText(
    'No tener letras consecutivas'
  );
  const minLengthText = screen.getByText('Tener una longitud mínima de 8');
  expect(numberText).toBeInTheDocument();
  expect(specialCharText).toBeInTheDocument();
  expect(uppercaseText).toBeInTheDocument();
  expect(noConsecutiveLettersText).toBeInTheDocument();
  expect(minLengthText).toBeInTheDocument();
});
