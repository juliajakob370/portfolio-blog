import React from 'react';
import { IoMdHome } from "react-icons/io";
import {FaVolumeUp} from "react-icons/fa";

interface WiiBarProps {
    timeText?: string;
    dateText?: string;
}

export const WiiBar: React.FC<WiiBarProps> = ({
                                                  timeText = "12:00 PM",
                                                  dateText = "Mon 09/14"
                                              }) => {
    return (
        <footer className="wii-bar-wrapper">
            {/* SVG Background Path providing the classic Wii curve */}
            <svg
                className="wii-bar-svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="wiiBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--bar-grad-start)" />
                        <stop offset="100%" stopColor="var(--bar-grad-end)" />
                    </linearGradient>
                </defs>

                <path
                    d="M 0,0
             L 280,0
             C 320,0 330,55 370,55
             L 630,55
             C 670,55 680,0 720,0
             L 1000,0
             L 1000,100
             L 0,100 Z"
                    fill="url(#wiiBarGrad)"
                />

                <path
                    d="M 0,1
             L 280,1
             C 320,1 330,56 370,56
             L 630,56
             C 670,56 680,1 720,1
             L 1000,1"
                    fill="none"
                    stroke="var(--purple-700)"
                    strokeWidth="2"
                />
            </svg>

            {/* Bar Content Overlay */}
            <div className="wii-bar-content">
                {/* LEFT GROUP */}
                <div className="wii-bar-left">
                    <button className="wii-circle-btn" aria-label="Audio">
                        <FaVolumeUp style={{ color: 'var(--purple-300)', fontSize: 'xxx-large'}}/>
                    </button>
                    <div className="wii-toggle-btn">
                        <div className="toggle-thumb" />
                    </div>
                </div>

                {/* CENTER CLOCK DISPLAY */}
                <div className="wii-bar-center">
                    <div className="wii-time-text">{timeText}</div>
                    <div className="wii-date-text">{dateText}</div>
                </div>

                {/* RIGHT GROUP */}
                <div className="wii-bar-right">
                    <button className="wii-circle-btn" aria-label="Home">
                        <IoMdHome style={{ color: 'var(--purple-300)', fontSize: 'xxx-large' }} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default WiiBar;