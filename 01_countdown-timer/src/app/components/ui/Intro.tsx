'use client'
import React from 'react'

const Intro = () => {
    return (
        <div>



            <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
                {/* Introduction Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200 mb-2">
                        Countdown Timer Project
                    </h2>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        Made by <span className="text-2xl text-blue-600 dark:text-blue-400">FAIZAN AHMED</span>
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        This project is built using <span className="font-bold text-gray-800 dark:text-gray-100">Next.js</span>,
                        <span className="font-bold text-gray-800 dark:text-gray-100"> React</span>, and
                        <span className="font-bold text-gray-800 dark:text-gray-100"> TypeScript</span>. It demonstrates the use of
                        React hooks, state management, and interval timers. The UI is styled using custom components and
                        <span className="font-bold text-gray-800 dark:text-gray-100"> Tailwind CSS</span> for responsiveness and dark mode support.
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        This countdown timer can be beneficial for users who need to keep track of time for tasks such as
                        <span className="font-semibold text-gray-800 dark:text-gray-100"> workouts</span>,
                        <span className="font-semibold text-gray-800 dark:text-gray-100"> cooking</span>, or any activity requiring precise timing.
                        Its simple interface and functionality make it easy to use and customize for various needs.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Intro