'use client'
import React, { useState, useEffect } from 'react'

import { FaBirthdayCake, FaGift } from 'react-icons/fa'
import { GiBalloons } from 'react-icons/gi'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'


const Birthday = () => {


    // Dynamically import Confetti component
    const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false })



    // const totalCandles: number = 5 // Total number of candles
    const candleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
    const balloonColors = candleColors

    const [candlesLit, setCandlesLit] = useState<number>(0) // Number of lit candles 
    const [balloonsPoppedCount, setBalloonsPoppedCount] = useState<number>(0) // Number of popped balloons
    const [celebrating, setCelebrating] = useState<boolean>(false) // Whether celebration has started 
    const [showConfetti, setShowConfetti] = useState<boolean>(false) // Whether to show confetti
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

    // Function to start celebration
   
// Helper function to create delay
const delay = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));

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

    // Show confetti after all balloons are popped
    setShowConfetti(true);
};

    return (
        <div>
            <div className="flex justify-center space-x-2 items-center ">
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
                                <FaBirthdayCake
                                    className={`w-8 h-8 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110`}
                                    style={{ color: candleColors[index % candleColors.length] }}
                                    onClick={() => lightCandle(index)}
                                />
                            </motion.div>
                        ) : (
                            // Unlit candle
                            <FaBirthdayCake
                                className={`w-8 h-8 text-gray-300 transition-colors duration-300 cursor-pointer hover:scale-110`}
                                onClick={() => lightCandle(index)}
                            />
                        )}
                    </AnimatePresence>
                ))}
            </div>

            {/* Balloons section */}
            <div>

                <div className="flex justify-center space-x-2 mt-4">
                    {/* Map through balloons */}
                    {[...Array(5)].map((_, index: any) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 1 }}
                            animate={{ scale: index < balloonsPoppedCount ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Balloon icon */}
                            <GiBalloons
                                className={`w-8 h-8 cursor-pointer hover:scale-110`}
                                style={{ color: index < balloonsPoppedCount ? '#D1D5DB' : balloonColors[index % balloonColors.length] }}
                                onClick={() => popBalloon(index)}
                            />
                        </motion.div>
                    ))}
                </div>

                <Button
                    className="bg-black text-white hover:bg-gray-800 transition-all duration-300 mt-8"
                    onClick={celebrate}
                    disabled={celebrating}
                >
                    Celebrate! <FaGift className="ml-2 h-4 w-4" />
                </Button>



            </div>

            {showConfetti && (
                <DynamicConfetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                    colors={['red', 'yellow']}
                />
            )}

        </div>
    )
}