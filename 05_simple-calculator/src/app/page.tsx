'use client'

import { ChangeEvent, useState, useEffect } from "react";


export default function Home() {

  const [answer, setAnswer] = useState("")
  const [Number1, setNumber1] = useState("")
  const [Number2, setNumber2] = useState("")
  const [clearBtn, setClearBtn] = useState(false)
  const [loading, setLoading] = useState(true);


  const error = 'Number to daaliyee!'


  // Change state of Number1 input Field
  const Number1Change = (e: ChangeEvent<HTMLInputElement>) => {

    setNumber1(e.target.value)

  }

  // Change state of Number2 input Field
  const Number2Change = (e: ChangeEvent<HTMLInputElement>) => {

    setNumber2(e.target.value)
  }

  //Additon
  const addButton = () => {

    Number1 && Number2 ? setAnswer((parseFloat(Number1) + parseFloat(Number2)).toString()) : setAnswer(error)
    setClearBtn(true)
  }

  //Subtraction
  const subtractButton = () => {

    (Number1 && Number2) ? setAnswer((parseFloat(Number1) - parseFloat(Number2)).toString()) : setAnswer(error)
    setClearBtn(true)

  }

  //Multiplication
  const multiplyButton = () => {
    (Number1 && Number2) ? setAnswer((parseFloat(Number1) * parseFloat(Number2)).toString()) : setAnswer(error)
    setClearBtn(true)

  }
  //Divison
  const devideButton = () => {
    (Number1 && Number2) ? setAnswer((parseFloat(Number1) / parseFloat(Number2)).toString()) : setAnswer(error)
    setClearBtn(true)
  }

  //Clearing the Field Function
  const clearButton = () => {

    setAnswer('')
    setNumber1('')
    setNumber2('')
    setClearBtn(false)

  }

  // Interface Color changing
  const [bgColor, setBgColor] = useState(`bg-gray-600`)
  const bgChange = (color: string) => {

    setBgColor(color)
  }

//Loading Page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading screen after 2 seconds
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="animate-spin  w-[100px] h-[100px] border-8 rounded-full border-t-red-600"></div>
        <p className="text-red-600 font-bold text-4xl ml-4">Loading...</p>
      </div>
    );
  }


  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center">

      <div className=" flex  flex-col items-center justify-center gap-12">

        <div className=" flex flex-col items-center justify-center bg-gray-500 bg-opacity-50 border-2 rounded-2xl border-gray-800 shadow-lg shadow-black hover:-translate-y-5 transition-all duration-300  px-6 py-2 gap-2 " >
          <h2 className="font-bold text-3xl">SKINS</h2>

          <div className=" flex items-center justify-center space-x-5 ">

            <button onClick={() => bgChange('bg-cyan-500')} className="w-12 h-12 rounded-full border border-gray-100 hover:scale-105 transition-all duration-200 bg-cyan-500"></button>

            <button onClick={() => bgChange('bg-[#d14d52]')} className="w-12 h-12 rounded-full border border-gray-100 hover:scale-105 transition-all duration-200 bg-[#d14d52]"></button>

            <button onClick={() => bgChange('bg-blue-500')} className="w-12 h-12 rounded-full border border-gray-100 hover:scale-105 transition-all duration-200 bg-blue-400"></button>

            <button onClick={() => bgChange('bg-[#8f8aca]')} className="w-12 h-12 rounded-full border border-gray-100 hover:scale-105 transition-all duration-200 bg-[#8f8aca]"></button>

            <button onClick={() => bgChange('bg-[#e0e05a]')} className="w-12 h-12 rounded-full border border-gray-100 hover:scale-105 transition-all duration-200 bg-[#e0e05a]"></button>
          </div>

        </div>

        <div className={`${bgColor}  shadow-lg shadow-black hover:scale-110 hover:shadow-black hover:shadow-2xl transition-all duration-300 border-4 p-8 border-black rounded-3xl  flex flex-col items-center justify-center gap-6`} >

          <h1 className="text-3xl text-black text-left font-bold">Simple Calculator</h1>

          <p className="text-black text-2xl text-right font-extrab500 font-mono -mt-4">By Faizan Ahmed</p>

          <div className="mt-4 gap-3 flex ">
            <input className="inputField rounded-md w-40" type="number" placeholder="number 1" value={Number1} onChange={Number1Change} />

            <input className="inputField rounded-md w-40" type="number" placeholder="number 2" value={Number2} onChange={Number2Change} />
          </div>

          <div className=" flex justify-center items-center gap-3">
            <button className="px-8 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-100 hover:scale-105 transition-all text-xl font-bold duration-300" onClick={addButton}>+</button>
            <button className="px-8 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-100 hover:scale-105 transition-all text-xl font-bold duration-300" onClick={subtractButton}>-</button>
            <button className="px-8 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-100 hover:scale-105 transition-all text-xl font-bold duration-300" onClick={multiplyButton}>*</button>
            <button className="px-8 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-100 hover:scale-105 transition-all text-xl font-bold duration-300" onClick={devideButton}>/</button>
          </div>

          <input className="bg-gray-100 inputField font-bold outline outline-gray-500 w-[300px] rounded-md mt-4 text-2xl" type="number" placeholder="result" value={answer} readOnly />

          {clearBtn && <button className=" px-8 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-100 hover:scale-105 transition-all text-xl duration-300" onClick={clearButton}>Clear</button>}
        </div>
      </div>
    </div>
  );
}
