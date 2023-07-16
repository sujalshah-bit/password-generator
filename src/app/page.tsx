"use client";
import React, { useReducer } from "react";
import passwordReducer from "@/reducer/passwordReducer";

const RandomPasswordGenerator: React.FC = () => {
  const [state, dispatch] = useReducer(passwordReducer, {
    length: 8,
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChars: true,
    password: "",
  });

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(event.target.value);
    dispatch({ type: "SET_LENGTH", payload: length });
  };

  const handleCheckboxToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxName = event.target.name;
    switch (checkboxName) {
      case "uppercase":
        dispatch({ type: "TOGGLE_UPPERCASE" });
        break;
      case "lowercase":
        dispatch({ type: "TOGGLE_LOWERCASE" });
        break;
      case "numbers":
        dispatch({ type: "TOGGLE_NUMBERS" });
        break;
      case "specialChars":
        dispatch({ type: "TOGGLE_SPECIAL_CHARS" });
        break;
      default:
        break;
    }
  };

  const handleGeneratePassword = () => {
    dispatch({ type: "GENERATE_PASSWORD" });
  };

  return (
    <>
      <nav className="bg-[#1C1C1C] py-4 px-8 flex items-center justify-between w-full">
        <div>
          <span className="text-white font-bold text-lg">
            Password Generator
          </span>
        </div>
        {/* <div>
          <button className="text-white font-semibold text-sm mx-2">
            Sign In
          </button>
          <button className="text-white font-semibold text-sm mx-2">
            Log In
          </button>
        </div> */}
      </nav>

      <div className="flex flex-col justify-center items-center h-screen bg-[#1C1C1C] ">
        <div className="max-w-md mx-auto p-6 bg-[#EAEDED] text-black rounded shadow-lg  ">
          <h2 className="text-2xl font-semibold mb-4">
            Random Password Generator
          </h2>
          <div className="mb-4">
            <label htmlFor="password-length" className="font-semibold">
              Length:
            </label>
            <input
              id="password-length"
              type="number"
              min="6"
              max="32"
              value={state.length}
              onChange={handleLengthChange}
              className="ml-2 px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="uppercase-checkbox" className="font-semibold">
              Uppercase
            </label>
            <input
              id="uppercase-checkbox"
              type="checkbox"
              name="uppercase"
              checked={state.uppercase}
              onChange={handleCheckboxToggle}
              className="ml-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lowercase-checkbox" className="font-semibold">
              Lowercase
            </label>
            <input
              id="lowercase-checkbox"
              type="checkbox"
              name="lowercase"
              checked={state.lowercase}
              onChange={handleCheckboxToggle}
              className="ml-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="numbers-checkbox" className="font-semibold">
              Numbers
            </label>
            <input
              id="numbers-checkbox"
              type="checkbox"
              name="numbers"
              checked={state.numbers}
              onChange={handleCheckboxToggle}
              className="ml-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="special-chars-checkbox" className="font-semibold">
              Special Characters
            </label>
            <input
              id="special-chars-checkbox"
              type="checkbox"
              name="specialChars"
              checked={state.specialChars}
              onChange={handleCheckboxToggle}
              className="ml-2"
            />
          </div>
          <button
            onClick={handleGeneratePassword}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Generate Password
          </button>
          {state.password && <p className="mt-4">Password: {state.password}</p>}
        </div>
      </div>
    </>
  );
};

export default RandomPasswordGenerator;
