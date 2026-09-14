import React, { useState } from 'react';
// @ts-ignore
import WiiBar from './components/WiiBar.jsx'
import './styles/style.css';

// Define the type for our valid view/page names
type View = 'home' | 'experience' | 'projects' | 'blog';

export default function App() {
    const [activeView, setActiveView] = useState<View>('home');

    // Function to render different pages depending on active state
    const renderView = () => {
        switch (activeView) {
            case 'experience':
                return <div className="view-content">Experience Page Content</div>;
            case 'projects':
                return <div className="view-content">Projects Page Content</div>;
            case 'blog':
                return <div className="view-content">Blog / Messages Page Content</div>;
            case 'home':
            default:
                return (
                    <div className="view-content">

                    </div>
                );
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
                <WiiBar activeView={activeView} setActiveView={setActiveView} />
            </div>
        </div>
    );
}