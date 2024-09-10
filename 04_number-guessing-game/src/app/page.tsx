// 'use client'
// import { randomBytes } from "crypto";
// import { useState, useEffect } from "react";

// export default function Home() {

//   const [number, setNumber] = useState<number >()
//   const [userInput, setUserInput] =useState<number>()
//   const [statement, setStatement] =useState<string>('')
//   const [error, setError] = useState<string>('')



//   const numberGuess = () => {

//     let randomNumber = Math.floor(Math.random() * 10) + 1
//     setNumber(randomNumber)
//     if (userInput === randomNumber){

//       setStatement('You gueesed the correct number!')
//       }else if(userInput === 100){

//         setError('dontttt')
//         setStatement('')

//       }else{

//         setStatement(`Your Guess is Incorrect!, Correct number was ${randomNumber}`)
//     }




//     }




//   return (
//     <div className="flex justify-center items-center flex-col h-screen gap-6">

//       <input type="number"
//         className="border-gray-300 border h-10 rounded-md bg-gray-100 p-3 "
//         placeholder="Type your number...."
//         value={userInput}
//         required
//         min={1}
//         max={10}

//         onChange={e =>setUserInput(e.target.value)}
//       />


//       <button
//         onClick={numberGuess}
//         className="bg-black text-white ps-4 py-2 p-12 rounded-lg text-center font-bold">
//         Guess it!
//       </button>
//       <h1>{number}</h1>

//       <h1>{statement}</h1>
//       <h1>{error}</h1>
//     </div>
//   );
// }




// 'use client'
// import { useState } from "react";

// export default function Home() {
//   const [number, setNumber] = useState<number>();
//   const [userInput, setUserInput] = useState<string>(""); // Correct typing here
//   const [message, setMessage] = useState<string>(""); // State to store the comparison result
//   const [error, setError] = useState<string>(""); // State to store validation error message

//   const numberGuess = () => {
//     const inputNumber = Number(userInput);

//     // Check if input is between 1 and 10
//     if (inputNumber < 1 || inputNumber > 10 || isNaN(inputNumber)) {
//       setError("Please enter a number between 1 and 10.");
//       setMessage(""); // Clear the result message
//       return;
//     }

//     setError(""); // Clear any previous error message

//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     setNumber(randomNum);

//     if (inputNumber === randomNum) {
//       setMessage("Correct Guess!");
//     } else {
//       setMessage(`Wrong Guess! The correct number was ${randomNum}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center flex-col h-screen gap-6">
//       <input
//         type="number"
//         className="border-gray-300 border h-10 rounded-md bg-gray-100 p-3 w-40"
//         placeholder="Type your number (1-10)"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)} // Correct typing here
//         min="1" // Set min value to 1
//         max="10" // Set max value to 10
//       />

//       <button
//         onClick={numberGuess}
//         className="bg-black text-white ps-4 py-2 p-12 rounded-lg text-center font-bold"
//       >
//         Guess it!
//       </button>

//       {error && <p className="text-red-500">{error}</p>} {/* Display validation error */}
//       <h1>{number && `Random Number: ${number}`}</h1> {/* Display the random number */}
//       <h2>{message}</h2> {/* Display the result message */}
//     </div>
//   );
// }












'use client'
import { useState } from "react";

export default function Home() {
  // const [number, setNumber] = useState<number>();
  const [userInput, setUserInput] = useState<string>(""); // State to store the input value
  const [message, setMessage] = useState<string>(""); // State to store the comparison result
  const [error, setError] = useState<string>(""); // State to store validation error message


  const numberGuess = () => {
    const inputNumber = Number(userInput);

    // Check if input is between 1 and 10
    if (inputNumber < 1 || inputNumber > 10 || isNaN(inputNumber)) {
      setError("Please enter a number between 1 and 10.");
      setMessage(""); // Clear the result message
      // setNumber(undefined)
      return;
    }

    setError(""); // Clear any previous error message

    const randomNum = Math.floor(Math.random() * 10) + 1;
    // setNumber(randomNum);

    const winMessage = `Correct Guess!`
    const lossMessage = `Wrong Guess! The correct number was ${randomNum}`

    if (inputNumber === randomNum) {
      setMessage(winMessage)
      setUserInput('')

    } else {
      setMessage(`${lossMessage} ${randomNum}`);
    }
  };

  const statementClass = message.includes('Correct Guess!') ? 'text-green-500 font-extrabold' :
    `text-red-500 font-bold `;


  return (
    <div className="flex justify-center items-center flex-col h-screen gap-6">
      <input
        type="number"
        className="border-gray-300 border h-12 rounded-md bg-gray-100 p-3 px-4 w-[250px]"
        placeholder="Type your number (1-10)"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} // Update the input state on change

      />

      <button
        onClick={numberGuess}
        className="bg-black text-white px-6 py-2 p-12 rounded-lg font-bold"
      >Guess it!
      </button>

      {error && <p className="text-red-500">{error}</p>} {/* Display validation error */}

      <h2 className={`${statementClass}`}>{message}</h2> {/* Display the result message */}
    </div>
  );
}
