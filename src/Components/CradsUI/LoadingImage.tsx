import React from 'react';

const SimpleLoadingAnimation: React.FC = () => {
    return (
        <div
            style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            border: '2px solid',
            borderRadius: '12px',
            background: 'var(--loading-bg)',
            borderColor: 'var(--loading-border)',
            transition: 'background 0.3s, border-color 0.3s',
            }}
            className="loading-animation-root"
        >
            {/* Three animated horizontal bars */}
            <div className="loading-bars-horizontal">
            <div className="loading-bar-horizontal" style={{ animationDelay: '0s' }} />
            <div className="loading-bar-horizontal" style={{ animationDelay: '0.2s' }} />
            <div className="loading-bar-horizontal" style={{ animationDelay: '0.4s' }} />
            </div>
            <style>
            {`
            .loading-animation-root {
                --loading-bg: linear-gradient(135deg, #f3e6fa 0%, #e0c8f7 100%);
                --loading-bar-bg: #892CDC;
            }
            @media (prefers-color-scheme: dark) {
                .loading-animation-root {
                --loading-bg: linear-gradient(135deg, #2a1746 0%,rgba(62, 32, 107, 0.62) 100%);
                --loading-bar-bg: #bc6ff1;
                }
            }
            .loading-bars-horizontal {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 40px;
                height: 60px;
                justify-content: center;
                align-items: center;
                z-index: 1;
            }
            .loading-bar-horizontal {
                height: 7px;
                width: 100%;
                border-radius: 6px;
                background: var(--loading-bar-bg);
                animation: loading-bar-horizontal-bounce 1s infinite cubic-bezier(.68,-0.55,.27,1.55);
            }
            @keyframes loading-bar-horizontal-bounce {
                0%, 100% { transform: scaleX(0.5);}
                50% { transform: scaleX(1.2);}
            }
            `}
            </style>
        </div>
    );
};

export default SimpleLoadingAnimation;
