import React, { useState, useEffect } from "react";
import "./App.css";

const Sale = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Set your sale end date here
    const saleEndDate = new Date("2025-01-31T23:59:59");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = saleEndDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [saleEndDate]);

    return (
        <div className="container-fluid  my-5">
            {/* Hero Section */}
            <div
                className="sale-banner p-4 text-center text-white"
                id="sale-link"
                style={{
                    backgroundColor: "#ff5733",
                    borderRadius: "10px",
                    position: "relative",
                }}
            >
                <h1 className="fw-bold display-5">Exclusive Sale Ends Soon!</h1>
                <p className="fs-4">Grab up to 50% off on our timeless collection of clocks.</p>

                {/* Shop Button Inside Hero */}
                <button
    className="btn btn-light fw-bold mt-3 px-5 py-3"
    style={{
        borderRadius: "50px",
        backgroundColor: "#ffffff",
        color: "#ff5733",
        border: "2px solid #ffffff",
        transition: "0.3s",
        position: "absolute",
        bottom: "-20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
    }}
    onMouseOver={(e) => {
        e.target.style.backgroundColor = "#ff5733";
        e.target.style.color = "#ffffff"; // Change text color to white
    }}
    onMouseOut={(e) => {
        e.target.style.backgroundColor = "#ffffff";
        e.target.style.color = "#ff5733"; // Revert text color to orange
    }}
>
    Shop the Sale
</button>
            </div>

            {/* Countdown Timer */}
            <div
                className="countdown-timer mt-5 p-3 text-center bg-light shadow-sm"
                style={{ borderRadius: "10px" }}
            >
                <h2 className="fw-bold text-danger">Time Left:</h2>
                <div className="d-flex justify-content-center">
                    {["days", "hours", "minutes", "seconds"].map((unit) => (
                        <div key={unit} className="time-box mx-2 text-center">
                            <div className="time-value fs-3 fw-bold">{timeLeft[unit]}</div>
                            <div className="time-label text-uppercase text-muted">{unit}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sale;
