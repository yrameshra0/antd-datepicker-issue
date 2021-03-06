import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
    <div className="App">
        <h1>Please fork this codesandbox to reproduce your issue.</h1>
        <div>Current antd version: {version}</div>
        <div style={{ marginTop: "16px" }}>
            <App />
        </div>
    </div>,
    document.getElementById("root")
);