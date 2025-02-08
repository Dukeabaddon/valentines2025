import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import '../App.css'

function Months({ onImageClick }) {
    const startDate = new Date("2024-11-16T00:00:00");
    const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, months: 0, daysInMonth: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const totalSeconds = Math.floor((now - startDate) / 1000);

            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            // Calculate months and remaining days
            const months = Math.floor(days / 30); // Approximate months
            const daysInMonth = days % 30; // Remaining days

            setTimeElapsed({ days, hours, minutes, seconds, months, daysInMonth });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [startDate]);

    return (
        <Card>
            <div className="flex flex-col sm:flex-row sm:items-center sm:pl-16 sm:pt-12 pt-7 sm:gap-12">
                <div className="relative flex items-center justify-center">
                    <div className="absolute border-8 border-dashed dash rounded-full h-48 w-48 animate-spin border-[#FF5BAE]"></div>
                    <img src="./public/img (6).jpg" alt="Diega" className="h-40 w-40 rounded-full object-cover" />
                </div>
                <p className="text-white sm:text-3xl text-xl sm:whitespace-nowrap text-center mt-9 bg-[#FF5BAE] sm:px-8 py-2.5 rounded-[50px]">
                    HOW LONG HAVE WE BEEN TOGETHER? ♡
                </p>
        </div>

            <div className="sm:mt-5 mt-14 h-max">
                <div className="sm:text-4xl text-2xl text-red-700 text-center">
                    <h3><span id="month">{timeElapsed.months}</span> MONTHS <span id="day">{timeElapsed.daysInMonth}</span> DAYS</h3>
                </div>
                {/* Timer */}
                <div className="flex text-[#FF5BAE] justify-evenly mt-10">
                    <div className="flex flex-col items-center">
                        <span id="days" className="sm:text-4xl text-2xl">{timeElapsed.days}</span>
                        <p className="sm:text-2xl text-xl  mt-7">Days</p>
                    </div>
                    <div className="sm:text-6xl text-4xl">:</div>
                    <div className="flex flex-col items-center">
                        <span id="hours" className="sm:text-6xl text-4xl">{timeElapsed.hours}</span>
                        <p className="sm:text-2xl text-xl  sm:mt-3 mt-5">Hours</p>
                    </div>
                    <div className="sm:text-6xl text-4xl">:</div>
                    <div className="flex flex-col items-center">
                        <span id="minutes" className="sm:text-6xl text-4xl">{timeElapsed.minutes}</span>
                        <p className="sm:text-2xl text-xl sm:mt-3 mt-5">Mins</p>
                    </div>
                    <div className="sm:text-6xl text-4xl">:</div>
                    <div className="flex flex-col items-center">
                        <span id="second" className="sm:text-6xl text-4xl">{timeElapsed.seconds}</span>
                        <p className="sm:text-2xl text-xl sm:mt-3 mt-5">Secs</p>
                    </div>
                </div>
            </div>

                <div className="mt-16">
                    <img src="./public/paws.png" alt="Paws" className="mx-auto  sm:w-auto w-[80%]" />
                </div>
                <div className="flex justify-end items-end pr-20 absolute bottom-8 right-2 mb-4 mr-4">
                    <img 
                        src="./public/btn-next.png" 
                        alt="Button" 
                        className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
                        onClick={onImageClick}
                    />
                </div>
        
        </Card>
    );
} 

export default Months;