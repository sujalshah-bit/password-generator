export interface State {
    length: number;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    specialChars: boolean;
    password: string;
  }
  
 export  type Action =
    | { type: 'SET_LENGTH'; payload: number }
    | { type: 'TOGGLE_UPPERCASE' }
    | { type: 'TOGGLE_LOWERCASE' }
    | { type: 'TOGGLE_NUMBERS' }
    | { type: 'TOGGLE_SPECIAL_CHARS' }
    | { type: 'GENERATE_PASSWORD' };