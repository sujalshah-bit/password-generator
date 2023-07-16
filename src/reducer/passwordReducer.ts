import { State, Action } from "@/interface/interface";



export default function passwordReducer(state: State, action: Action): State {
    switch (action.type) {
      case 'SET_LENGTH':
        return { ...state, length: action.payload };
      case 'TOGGLE_UPPERCASE':
        return { ...state, uppercase: !state.uppercase };
      case 'TOGGLE_LOWERCASE':
        return { ...state, lowercase: !state.lowercase };
      case 'TOGGLE_NUMBERS':
        return { ...state, numbers: !state.numbers };
      case 'TOGGLE_SPECIAL_CHARS':
        return { ...state, specialChars: !state.specialChars };
      case 'GENERATE_PASSWORD':
        const chars = [
          'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          'abcdefghijklmnopqrstuvwxyz',
          '0123456789',
          '!@#$%^&*()',
        ];
  
        let selectedChars = '';
        if (state.uppercase) selectedChars += chars[0];
        if (state.lowercase) selectedChars += chars[1];
        if (state.numbers) selectedChars += chars[2];
        if (state.specialChars) selectedChars += chars[3];
  
        let password = '';
        for (let i = 0; i < state.length; i++) {
            
            const randomIndex = Math.floor(Math.random() * selectedChars.length);
            console.log(randomIndex," RANDOMIND");
            password += selectedChars[randomIndex];
            console.log(password," password");
        }
  
        return { ...state, password };
      default:
        return state;
    }
  }