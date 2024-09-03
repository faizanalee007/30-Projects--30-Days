'use client'
import React from 'react'
import { useState, useEffect } from "react";
import Intro from './components/ui/Intro'
import Countdown from './components/ui/Countdown'



import Loading from './components/ui/Loading'; // Import the Loading component

const Main = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (isLoading) {
    return <Loading />; // Display the loading screen while loading
  }

  return (
    <div className="h-screen bg-gray-100">
      <Intro />
      <Countdown />
 
    </div>
  )
}

export default Main



