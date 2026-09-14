import React, { useState } from 'react';
import WiiBar from './components/WiiBar.tsx'
import Landing from './pages/Landing';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import type { View } from './types';
import './styles/style.css';

export function App() {
    const [activeView, setActiveView] = useState<View>('home');

    // Function to render different pages depending on active state
    const renderView = () => {
        switch (activeView) {
            case 'experience':
                return <Experience/>;
            case 'projects':
                return <Projects/>;
            case 'blog':
                return <Blog/>;
            case 'home':
            default:
                // @ts-ignore
                return <Landing setActiveView={setActiveView}/>;
        }
    };

    return (
        <div className="wii-bezel">
            <div className="wii-screen">
                {/* Main Content Area */}
                <main className="wii-screen-body">
                    {renderView()}
                </main>

                {/* Compact Bottom Navigation Bar */}
                <WiiBar activeView={activeView} setActiveView={setActiveView}/>
            </div>
        </div>
    );
}