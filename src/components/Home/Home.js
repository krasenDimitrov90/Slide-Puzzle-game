import React from "react";

import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {

    return (
        <div className="home">
            <h2>Welcome to puzzle slider</h2>
            <Link to='/difficulty' className="play-btn" >Play</Link>
        </div>
    );
}