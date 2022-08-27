import React, { Fragment, useState } from "react";
import "./calculator.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Calculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(0);
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [requiredTiles, setRequiredTiles] = useState("");

  let tileAreaInSq;

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  let calculateArea = (event) => {
    event.preventDefault(); //prevent submitting to server

    if (length === 0 || width === 0)
      alert("Please Enter a valid length and width");
    else {
      setArea(length * width);
    }
  };
  let calculateTiles = (event) => {
    event.preventDefault();
    if (totalArea === 0) alert("Please enter a valid AREA");
    tileAreaInSq = ((tileLength/25.4) * (tileWidth/25.4))/144;
    setRequiredTiles(Math.round(totalArea / tileAreaInSq)+1); 

  };

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    // <div className='main-container'>
    //     <div className='area-calculate'>
    //         <h2 className='center'>Area calculator</h2>
    //         <form onSubmit={calculateArea}>
    //             <div>
    //             <label>Length (m)</label>
    //             <input value={length} onChange={(e)=> setLength(e.target.value)}/>
    //             </div>
    //             <div>
    //             <label>Width (m)</label>
    //             <input value={width} onChange={(e)=> setWidth(e.target.value)}/>
    //             </div>

    //             <div>
    //                 <button className='btn' type='submit'>calculate </button>
    //             </div>
    //         </form>

    //         <div className='center'></div>
    //         <h3> Area (meter square): {area}</h3>

    //     </div>

    //     <div className='tiles-calculate'>

    //     </div>

    //     {/* tiles calculator */}

    //     <div className='tiles-calculate'>
    //         <h2 className='center'>Tiles calculator</h2>
    //         <form onSubmit={calculateTiles}>
    //             <div>
    //             <label>Area (m2)</label>
    //             <input value={totalArea} onChange={(e)=> setTotalArea(e.target.value)}/>
    //             </div>
    //             <div>
    //                 <button className='btn' type='submit'>calculate </button>
    //             </div>
    //         </form>

    //         <div className='center'></div>
    //         <h3> Required TIles: {totalArea * 2}</h3>

    //     </div>

    //     <div className='tiles-calculate'>

    //     </div>

    //     </div>

    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>Calculate Area</p>
              <p onClick={(e) => switchTabs(e, "register")}>Required Tiles</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={calculateArea}>
            <div className="loginEmail">
              <input
                placeholder="Length (in feet)"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <input
                placeholder="Width (in feet)"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <h2> Area (square feet): {area}</h2>
            <button className="loginBtn" type="submit">
              Calculate{" "}
            </button>
            {/* <input type="submit" value="Calculate" className="loginBtn" /> */}
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={calculateTiles}
          >
            <h2>floor Area</h2>
            <div className="signUpName">
              <input
                name="name"
                placeholder="Area (sq ft)"
                value={totalArea}
                onChange={(e) => setTotalArea(e.target.value)}
              />
            </div>
            <h2>Tiles Area</h2>
            <div className="signUpEmail">
              <input
                placeholder="length (mm)"
                value={tileLength}
                onChange={(e) => setTileLength(e.target.value)}
              />
            </div>
            <div className="signUpPassword">
              <input
                placeholder="Width (mm)"
                value={tileWidth}
                onChange={(e) => setTileWidth(e.target.value)}
              />
            </div>

            <h2 className="requiredTilesResult"> Required Tiles: {requiredTiles}</h2>

            <button className="signUpBtn" type="submit">
              Calculate{" "}
            </button>
            {/* <input type="submit" value="Register" className="signUpBtn" /> */}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
