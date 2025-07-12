import React from "react";

const Footer = () => (
    <footer style={{
        background: "linear-gradient(90deg,rgb(180, 217, 236) 0%,rgb(183, 192, 207) 100%)",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center",
        fontFamily: "Segoe UI, sans-serif",
        boxShadow: "0 -2px 16px rgba(30,60,114,0.2)"
    }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: "1 1 200px", margin: "0.5rem 0" }}>
                <h2 style={{ margin: 0, fontWeight: 700, letterSpacing: "2px" }}>MyWebsite</h2>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.95rem", color: "#dbeafe" }}>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
            <div style={{ flex: "1 1 200px", margin: "0.5rem 0" }}>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#dbeafe", margin: "0 0.5rem", textDecoration: "none", fontSize: "1.2rem" }}>
                    GitHub
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#dbeafe", margin: "0 0.5rem", textDecoration: "none", fontSize: "1.2rem" }}>
                    Twitter
                </a>
                <a href="mailto:info@mywebsite.com" style={{ color: "#dbeafe", margin: "0 0.5rem", textDecoration: "none", fontSize: "1.2rem" }}>
                    Contact
                </a>
            </div>
        </div>
    </footer>
    
);

export default Footer;