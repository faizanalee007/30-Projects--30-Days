'use client'
import React, { useState } from "react";
import axios from "axios";
import { TiWeatherPartlySunny } from "react-icons/ti";


const WeatherWidget = () => {

    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string>("");


    const fetchWeather = async () => {
        if (city === "") {
            setError("Please enter a city name.");
            return;
        }

        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=d9134d06d9ec4172a56110839240309&q=${city}&aqi=no`
            );
            setWeather(response.data);
            setError("");
        } catch (err) {
            setError("City not found. Please try again.");
        }
    };

    const getWeatherMessage = (temp: number) => {
        if (temp > 30) {
            return "It's a hot day! Stay hydrated.";
        } else if (temp >= 20 && temp <= 30) {
            return "It's a warm day. Enjoy the sunshine!";
        } else if (temp >= 10 && temp < 20) {
            return "It's a bit chilly. You might need a jacket.";
        } else {
            return "It's cold outside. Stay warm!";
        }
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setCity(value);
        }
    };



    return (
        <div style={{ width: "350px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <div className=" text-xl text-[#fff] mb-5 flex items-center justify-center gap-1.5 w-[70%] mx-auto">
                <TiWeatherPartlySunny className="text-2xl " />

                <h3 >
                    Weather Check
                </h3>
            </div>

            <input
                type="text"
                value={city}
                // inputMode="numeric"
                // onChange={(e) => setCity((e.target.value))}
                onChange={handleInputChange}

                placeholder="Enter city name"
                style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            />
            <button
                onClick={fetchWeather}
                style={{ width: "100%", padding: "10px", backgroundColor: "#0070f3", color: "white", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: "bold" }}
            >
                Search
            </button>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            {weather && (
                <div style={{ marginTop: "20px", color: "#fff" }}>
                    <h4 style={{ marginBottom: "10px", textAlign: "center" }}>
                        {weather.location.name}
                        {/* , {weather.location.region} */}
                        , {weather.location.country}
                    </h4>
                    <p style={{ fontSize: "24px", textAlign: "center", fontWeight: "bold" }}>
                        {weather.current.temp_c}°C, {weather.current.condition.text}
                    </p>
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                        {getWeatherMessage(weather.current.temp_c)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;
