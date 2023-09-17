export interface PasswordValidationProps {
  requirements: requirementsArrayT;
  placeholder?: string;
  setPasswordFn?: React.Dispatch<React.SetStateAction<string>>;
  setIsValidFn?: React.Dispatch<React.SetStateAction<boolean>>;
  showEyeIcon?: boolean;
  language?: languageT;
  validRequirementColor?: validRequirementColorT;
  invalidRequirementColor?: invalidRequirementColorT;
  minLength?: number;
}

export interface requirementsOptionsT {
  specialChar: requirementOptionT;
  number: requirementOptionT;
  uppercase: requirementOptionT;
  noConsecutiveLetters: requirementOptionT;
  minLength: requirementOptionT;
}

interface requirementOptionT {
  regex: RegExp;
  message: {
    en: string;
    es: string;
  };
}

export type requirementsArrayT = (
  | 'specialChar'
  | 'number'
  | 'uppercase'
  | 'noConsecutiveLetters'
  | 'minLength'
)[];

export type languageT = 'en' | 'es';

export type validRequirementColorT = 'green' | 'blue';

export type invalidRequirementColorT = 'red' | 'black';
