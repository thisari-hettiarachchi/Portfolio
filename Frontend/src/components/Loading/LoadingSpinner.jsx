"use client";

import React, { useState, useEffect } from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onFinish) {
            setTimeout(() => onFinish(), 500);
          }
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="spinner-container">
      <div className="spinner-content">
        <div className="spinner-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24">
            <g>
              <circle cx="12" cy="3" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="16.5" cy="4.21" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.12s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="7.5" cy="4.21" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.24s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="19.79" cy="7.5" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.36s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="4.21" cy="7.5" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.48s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="21" cy="12" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.6s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="3" cy="12" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.72s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="19.79" cy="16.5" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.84s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="4.21" cy="16.5" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="0.96s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="16.5" cy="19.79" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="1.08s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="7.5" cy="19.79" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="1.2s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <circle cx="12" cy="21" r="1" fill="#2EB2D3">
                <animate attributeName="r" begin="1.32s" dur="0.72s" values="1;2;1" repeatCount="indefinite"/>
              </circle>
              <animateTransform attributeName="transform" dur="7.5s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"/>
            </g>
          </svg>

          <div className="progress-text">{progress}%</div>
        </div>

        <p className="loading-text">
          just setting things up <br /> crafting pixels into experiences.
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
