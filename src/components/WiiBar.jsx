import React, { useState, useEffect } from 'react';
import { Sun, Moon, Volume2, Home } from 'lucide-react';

export default function WiiBar({ activeView, setActiveView }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const formattedDate = time.toLocaleDateString([], {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
    });

    return (
        <div className="wii-bar">
            {/* Left Section: Controls */}
            <div className="wii-bar-left">
                {/* Light/Dark Toggle Switch Placeholder */}
                {/* TODO: wire up theme toggle */}
                <button
                    className="wii-toggle-btn"
                    title="Toggle Theme (Placeholder)"
                    onClick={() => {}}
                >
                    <Sun size={14} className="toggle-icon light" />
                    <Moon size={14} className="toggle-icon dark" />
                    <div className="toggle-thumb" />
                </button>

                {/* Audio Circle Button Placeholder */}
                {/* TODO: wire up audio toggle */}
                <button
                    className="wii-circle-btn"
                    title="Toggle Music (Placeholder)"
                    onClick={() => {}}
                >
                    <Volume2 size={18} color="#9d4edd" />
                </button>
            </div>

            {/* Center Section: Compact Time & Date */}
            <div className="wii-time-container">
                <span className="wii-time-text">{formattedTime}</span>
                <span className="wii-date-text">{formattedDate}</span>
            </div>

            {/* Right Section: Home Button */}
            <div className="wii-bar-right">
                <button
                    className={`wii-circle-btn home-btn ${activeView === 'home' ? 'active' : ''}`}
                    onClick={() => setActiveView('home')}
                    title="Home Menu"
                >
                    <Home size={20} color="#7b2cbf" />
                </button>
            </div>
        </div>
    );
}