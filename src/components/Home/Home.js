import React from "react";
import { useNavigate } from 'react-router-dom';

import Button from "../Button/Button";
import './Home.css';

export default function Home() {

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate('/difficulty');

    return (
        <div className="home">
            <h2>Welcome to puzzle slider</h2>
            <Button  className="play-btn" onClick={onNavigateHandler} >Play</Button>
        </div>
    );
}