import React from "react";

const spinnerStyle: React.CSSProperties = {
    width: "3rem",
    height: "3rem",
    border: "0.4rem solid",
    borderColor: "var(--spinner-bg, #e5e7eb) var(--spinner-fg, #6366f1) var(--spinner-bg, #e5e7eb) var(--spinner-bg, #e5e7eb)",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
    display: "block",
};

const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--bg, #fff)",
};

export default function Loading() {
    return (
        <>
            <style>
                {`
                    :root {
                        --spinner-bg: #e5e7eb;
                        --spinner-fg: #6366f1;
                        --bg: #fff;
                    }
                    @media (prefers-color-scheme: dark) {
                        :root {
                            --spinner-bg: #374151;
                            --spinner-fg: #a5b4fc;
                            --bg: #18181b;
                        }
                    }
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>
            <div style={containerStyle}>
                <div style={spinnerStyle} aria-label="Loading" />
            </div>
        </>
    );
}