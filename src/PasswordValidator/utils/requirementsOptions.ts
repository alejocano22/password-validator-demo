import { requirementsOptionsT } from '../types';

const createRequirementsOptions = (minLength: number): requirementsOptionsT => {
  return {
    specialChar: {
      regex: /[!@#$%^&*]/,
      message: {
        en: 'Has a special char !@#$%^&*',
        es: 'Tener un caracter especial !@#$%^&*',
      },
    },
    number: {
      regex: /\d/,
      message: {
        en: 'Has a number 0-9',
        es: 'Tener un numero 0-9',
      },
    },
    uppercase: {
      regex: /[A-Z]/,
      message: {
        en: 'Has a uppercase letter',
        es: 'Tener una letra mayuscula',
      },
    },
    noConsecutiveLetters: {
      regex: /^(?!.*[a-zA-Z]{2}).*$/,
      message: {
        en: 'Has no consecutive letters',
        es: 'No tener letras consecutivas',
      },
    },
    minLength: {
      regex: new RegExp(`^.{${minLength},}$`),
      message: {
        en: `Has a minimum length of ${minLength}`,
        es: `Tener una longitud mínima de ${minLength}`,
      },
    },
  };
};

export default createRequirementsOptions;
