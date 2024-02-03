import Breadcrumbs from '../Breadcrumbs.jsx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DailyMission from './DailyMission';
import PusatReward from './PusatReward';

export default function App() {
    const [showDailyMission, setShowDailyMission] = useState(false);

    const toggleComponent = () => {
        setShowDailyMission(!showDailyMission);
    };

    return (
        <div className="bg-gradient-to-r from-violet-100 m-sm-3 m-md-5 m-2 p-sm-3 p-md-5 p-2 rounded-5">
            <Breadcrumbs />
            <h1 className="text-center fs-1 mb-4 font-semibold">
                Selamat datang di misi keluarga idaman!
            </h1>
            <Routes>
                <Route path="/" element={<PusatReward />} />
                <Route path="/daily-mission" element={<DailyMission />} />
            </Routes>
            {/* {showDailyMission && (
                <div className="mb-3 font-bold text-lg" style={{color:"#a49eb5"}}>
                    <span style={{color:"#a49eb5"}} onClick={() => setShowDailyMission(false)} className="cursor-pointer text-blue-500">
                        Mission
                    </span>
                    {' > '}
                    Daily Mission
                </div>
            )} */}

            {/* Render the appropriate component based on the state */}
            {/* {showDailyMission ? (
                <DailyMission />
            ) : (
                <>
                    <PusatReward onButtonClick={toggleComponent} />
                </>
            )} */}
        </div>
    );
}