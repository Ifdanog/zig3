import React, { useState, useEffect } from "react";
import Earth from "../components/Earth";
import Cube from "../components/Cube";
import { Route, Link, useLocation } from "wouter";

const Hero = ({ isDarkMode }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [location, setLocation] = useLocation();

  const handleLogin = () => {
    setStartAnimation(true);
    // Redirect to "/cube" when logging in
    // setLocation("/cube");
  };

  const text = "Choose A Wallet To Login";
  const gridTitle1 = "Zig3 V1 ";
  const gridText1 = "The First wallet Integration";
  const gridUrl1 = "Zig3.uk ";
  const gridTitle2 = "Zig3 V2";
  const gridText2 = "The Latest in Wallet Technology";
  const gridUrl2 = "Zig3.org ";
  const gridTitle3 = "Zig3 Web3 ";
  const gridText3 = "The Web3 Domain use Brave to Browse";
  const gridUrl3 = "Zig3.wallet";

  return (
    <div className="container">
      <div className="hero-div">
        <div className="hero-subdiv">
          <Route path="/">
            <Earth startAnimation={startAnimation} />
          </Route>
          {/* <Route path="/cube">
            <Cube />
          </Route> */}
        </div>
        <div className="hero-subdiv" style={{ zIndex: 10 }}>
          <div>
            {startAnimation ? (
              <>
                <div>
                  {Array.from(text).map((char, index) => (
                    <span
                      key={index}
                      className={`matrix-text ${
                        startAnimation ? "fall-in" : ""
                      }`}
                      style={{
                        color: isDarkMode ? "#fff" : "#000",
                        fontSize: "4rem",
                        fontWeight: "bold",
                        animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    {Array.from(gridTitle1).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {Array.from(gridText1).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1rem",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {Array.from(gridUrl1).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1rem",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                  <div style={{ flex: 1 }}>
                    {Array.from(gridTitle2).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {Array.from(gridText2).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1rem",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {Array.from(gridUrl2).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1rem",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                  <div style={{ flex: 1 }}>
                    {Array.from(gridTitle3).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {Array.from(gridText3).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1rem",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {Array.from(gridUrl3).map((char, index) => (
                      <span
                        key={index}
                        className={`matrix-text ${
                          startAnimation ? "fall-in" : ""
                        }`}
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          fontSize: "1rem",
                          animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <h1
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                  fontSize: "4rem",
                  fontWeight: "bold",
                }}
              >
                Connect the World With Zig3
              </h1>
            )}
            <button className="loginbtn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
