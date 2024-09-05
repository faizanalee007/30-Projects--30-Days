'use client'
import React, { useState, useEffect } from 'react'
import { candleColors, balloonColors, confettieColors } from '@/colors'

import { FaBirthdayCake, FaGift } from 'react-icons/fa'
import { GiBalloons } from 'react-icons/gi'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FaCakeCandles } from 'react-icons/fa6'
import { BsFillBalloonHeartFill } from 'react-icons/bs'



const Birthday = () => {

    // Dynamically import Confetti component
    const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false })



    // const totalCandles: number = 5 // Total number of candles
    // const candleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']


    const [candlesLit, setCandlesLit] = useState<number>(0) // Number of lit candles 
    const [balloonsPoppedCount, setBalloonsPoppedCount] = useState<number>(0) // Number of popped balloons
    const [celebrating, setCelebrating] = useState<boolean>(false) // Whether celebration has started 
    const [showConfetti, setShowConfetti] = useState<boolean>(false) // Whether to show confetti
    const [showName, setShowName] = useState<boolean>(false) // Whether to show the name
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })


    // Effect to show confetti when all candles are lit and balloons are popped
    useEffect(() => {
        if (candlesLit === 5 && balloonsPoppedCount === 5) {
            setShowConfetti(true)
        }
    }, [candlesLit, balloonsPoppedCount])


    //   useEffect(() => {
    //     const handleResize = () => {
    //       setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    //     }
    //     handleResize()
    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    //   }, [])

    // Function to light a candle
    const lightCandle = (index: number) => {
        if (index === candlesLit) {
            setCandlesLit(prev => prev + 1)
        }
    }

    // Function to pop a balloon
    const popBalloon = (index: number) => {
        if (index === balloonsPoppedCount) {
            setBalloonsPoppedCount(prev => prev + 1)
        }
    }



    // Helper function to create delay
    const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

    // Function to start celebration
    const celebrate = async () => {
        setCelebrating(true);

        // Light candles one by one
        for (let i = 0; i < 5; i++) {
            setCandlesLit(prev => prev + 1);
            await delay(500); // Wait for 500ms before lighting the next candle
        }

        // Pop balloons one by one
        for (let i = 0; i < 5; i++) {
            setBalloonsPoppedCount(prev => prev + 1);
            await delay(500); // Wait for 500ms before popping the next balloon
        }

        // Show the name
        setShowName(true)
        
        // Show confetti after all balloons are popped
        setShowConfetti(true);

    };

    return (


        <div className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black flex flex-col justify-center items-center text-center">

            {/* Animated wrapper for the card */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                {/* <!-- Birthday Header --> */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-500 mb-11">🎉 Happy Birthday! 🎉</h1>

                {/* Conditionally render the name */}
                {showName && 
                
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 1, delay:  0.5 }}
                >              
                <h2
                    className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-transparent bg-clip-text  mb-8 mt-4 animate-pulse"
                    style={{
                        background: 'linear-gradient(to right, #FF5733, #FFBD33, #75FF33, #33FFBD, #335BFF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                    Asharib Ali
                </h2>
                </motion.div>
                
                }

                <div className='container flex-wrap'>
                 {/* Candles section */}
                <div className="flex justify-center space-x-4 items-center mt-12 ">
                    {/* Map through candles */}
                    {[...Array(5)].map((_, index) => (
                        <AnimatePresence key={index}>
                            {/* Render lit or unlit candle based on state */}
                            {(celebrating && index <= candlesLit) || (!celebrating && index < candlesLit) ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.5, delay: celebrating ? index * 0.5 : 0 }}
                                >
                                    {/* Lit candle */}
                                    <FaCakeCandles
                                        className={`md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] w-10 h-10 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110`}
                                        style={{ color: candleColors[index % candleColors.length] }}
                                        onClick={() => lightCandle(index)}
                                    />
                                </motion.div>
                            ) : (
                                // Unlit candle
                                <FaBirthdayCake
                                    className={`md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] w-10 h-10 text-gray-300 transition-colors duration-300 cursor-pointer hover:scale-110`}
                                    onClick={() => lightCandle(index)}
                                />
                            )}
                        </AnimatePresence>
                    ))}
                </div>

                {/* Balloons section */}
                <div className="flex justify-center space-x-4 items-center mt-8">
                    {/* Map through balloons */}
                    {[...Array(5)].map((_, index: any) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 1 }}
                            animate={{ scale: index < balloonsPoppedCount ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Balloon icon */}
                            <BsFillBalloonHeartFill
                                className={`md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] w-10 h-10 cursor-pointer hover:scale-110`}
                                style={{ color: index < balloonsPoppedCount ? '#D1D5DB' : balloonColors[index % balloonColors.length] }}
                                onClick={() => popBalloon(index)}
                            />
                        </motion.div>
                    ))}
                </div>
                </div>

            </motion.div>
            {showConfetti && (
                <DynamicConfetti
                    recycle={true}
                    numberOfPieces={500}
                    colors={confettieColors}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    
                />
            )}

            {/* <!-- Celebrate Button --> */}
            <button
                onClick={celebrate}
                disabled={celebrating}
                className="bg-red-600 text-[#FFD700] cursor-pointer font-extrabold text-xl py-2 px-6 rounded-full mt-8 transition-transform transform hover:scale-110"
            >
                Start Celebration!
            </button>
        </div >
    )}

export default Birthday