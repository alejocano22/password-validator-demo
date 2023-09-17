import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Renders main title', () => {
  render(<App />);
  const passwordComponentText = screen.getByText('Password Component');
  expect(passwordComponentText).toBeInTheDocument();
});

test('Renders option title', () => {
  render(<App />);
  const passwordComponentText = screen.getByText('Options');
  expect(passwordComponentText).toBeInTheDocument();
});

test('Renders all options', () => {
  render(<App />);
  const validationRequirementsText = screen.getByText(
    'Validation requirements'
  );
  const showPasswordText = screen.getByText('Show Password');
  const languageText = screen.getByText('Language');
  const validRequirementColorText = screen.getByText('Valid requirement color');
  const invalidRequirementColorText = screen.getByText(
    'Invalid requirement color'
  );
  expect(validationRequirementsText).toBeInTheDocument();
  expect(showPasswordText).toBeInTheDocument();
  expect(languageText).toBeInTheDocument();
  expect(validRequirementColorText).toBeInTheDocument();
  expect(invalidRequirementColorText).toBeInTheDocument();
});

test('Do not render minimum password length as default', () => {
  render(<App />);
  const textToCheck = 'Minimum password length';
  const textElement = screen.queryByText(textToCheck);
  expect(textElement).toBeNull();
});

test('Render minimum password length input if enabled', () => {
  render(<App />);
  const checkboxes = screen.getAllByRole('checkbox');
  const validationReqLastCheckbox = checkboxes[checkboxes.length - 2];
  fireEvent.click(validationReqLastCheckbox);

  const expectedText = 'Minimum password length';
  const textElement = screen.getByText(expectedText);
  expect(textElement).toBeInTheDocument();
});
