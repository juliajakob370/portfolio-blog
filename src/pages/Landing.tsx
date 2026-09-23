import { useEffect, useState } from 'react';
import type { View } from '../types';
import profilePicture from '../assets/profilePicture.jpg';
import React from "react";

interface LandingProps {
    setActiveView: (view: View) => void;
}

const fullText = "Hi, I'm Julia Jakob! :)";

interface Channel {
    id: View;
    label: string;
}

const channels: Channel[] = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
];

export default function Landing({ setActiveView }: LandingProps) {
    const [typedLength, setTypedLength] = useState(0);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleChange = () => {
            setReduceMotion(mediaQuery.matches);
        };

        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    useEffect(() => {
        if (reduceMotion) return;

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex += 1;
            setTypedLength(currentIndex);

            if (currentIndex >= fullText.length) {
                clearInterval(interval);
            }
        }, 90);

        return () => clearInterval(interval);
    }, [reduceMotion]);

    const displayedText = reduceMotion ? fullText : fullText.slice(0, typedLength);

    return (
        <div className="landing">
            <section className="wii-hero">
                <div className="wii-hero-image-wrapper">
                    <img className="wii-hero-image" src={profilePicture} alt="Julia Jakob" />
                </div>
                <div className="wii-hero-text">
                    <h1 className="wii-hero-title">
                        {displayedText}
                        <span className="cursor">|</span>
                    </h1>
                    <p className="wii-hero-blurb">
                        I love frontend UI/UX, creative problem-solving, and building thoughtful,
                        people-focused experiences with energy and enthusiasm.
                    </p>
                </div>
            </section>

            <section className="channel-row">
                {channels.map((channel) => (
                    <button
                        key={channel.id}
                        className="channel-tile"
                        onClick={() => setActiveView(channel.id)}
                    >
                        <span className="channel-label">{channel.label}</span>
                    </button>
                ))}
            </section>
        </div>
    );
}