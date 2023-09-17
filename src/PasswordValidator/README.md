# PasswordValidator Component
The PasswordValidator component is a versatile React component designed to help you validate and enforce password requirements in your web applications. It provides interactive feedback to users about the validity of their chosen password based on a set of specified requirements.

## Props

The PasswordValidator component accepts the following props:

- `requirements` (array of strings):
  - A list of password requirements to validate the password against. Supported requirements include:
    - 'specialChar': Requires one or more special characters (!@#$%^&*).
    - 'number': Requires at least one number or digit.
    - 'uppercase': Requires at least one uppercase letter.
    - 'noConsecutiveLetters': Ensures there are no consecutive letters.
    - 'minLength': Defines the minimum length of the password

- `placeholder` (string) [optional]:
  - Allows you to set a custom placeholder for the password input field.

- `setPasswordFn` (function: string) [optional]:
  - A setState action function that allows you to set the password value in the parent component's state.

- `setIsValidFn` (function: boolean) [optional]:
  - A setState action function that allows you to set the validity status of the password in the parent component's state.

- `showEyeIcon` (boolean) [optional]:
  - When set to `true`, it displays an eye icon that allows users to toggle between displaying or hiding the password.

- `language` (string) [optional]:
  - Accepts either 'en' for English or 'es' for Spanish. Changes the validation messages to the selected language.

- `validRequirementColor` (string) [optional]:
  - Allows you to change the color of valid requirements displayed in the UI. Supported colors are 'green' or 'blue'.

- `invalidRequirementColor` (string) [optional]:
  - Allows you to change the color of invalid requirements displayed in the UI. Supported colors are 'red' or 'black'.

- `minLength` (number) [optional]:
  - Defines the minimum length of the password. This prop is only active when the 'minLength' requirement is included in the `requirements` array.

## Usage

You can import the necessary types for the props from the `/types` folder to ensure type safety in your application.

```javascript
import { PasswordValidatorProps } from './types';

// Example usage of PasswordValidator component
function App() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <PasswordValidator
        requirements={['specialChar', 'number', 'minLength']}
        placeholder="Enter your password"
        setPasswordFn={setPassword}
        setIsValidFn={setIsValid}
        showEyeIcon={true}
        language="en"
        validRequirementColor="green"
        invalidRequirementColor="red"
        minLength={8}
      />
    </div>
  );
}
```

## Extensibility

The PasswordValidator component is designed for extensibility, allowing you to add new password requirements and customize its behavior to match your specific application needs. You can easily extend the component by following these guidelines:

### Adding New Password Requirements

To add new password requirements, you can simply update the `utils/requirementsOptions.ts` file. The structure for a new requirement should follow this pattern:

```javascript
key: {
  regex: //, // Regular expression for the requirement
  message: {
    en: 'English message', // Message for the requirement in English
    es: 'Spanish message', // Message for the requirement in Spanish
    // ... Add more language messages as needed
  },
},
```
By following this structure, you can define new requirements and their corresponding regular expressions and messages in multiple languages.

### Custom Languages and Colors
Additionally, you can customize the component further by adding support for new languages and specifying custom colors. The language prop allows you to switch between different languages for validation messages, while the validRequirementColor and invalidRequirementColor props enable you to define your preferred colors for UI feedback.

## Test Coverage
The PasswordValidator component includes a comprehensive set of tests in the PasswordValidator.test.tsx file. These tests cover most common use cases and ensure that the component behaves as expected. When adding new rules or requirements, make sure to extend the existing tests to maintain test coverage for your customizations.

Feel free to leverage the extensibility of the PasswordValidator component to tailor it to your specific password validation requirements and UI preferences.