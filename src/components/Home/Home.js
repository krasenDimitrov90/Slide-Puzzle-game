import React from "react";
import { useNavigate } from 'react-router-dom';

import './Home.css';
import Button from "../Button/Button";

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