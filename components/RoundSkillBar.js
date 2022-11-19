import React, { useEffect, useRef } from "react";

function RoundSkillBar({ value, from, to }) {
  const circleRef = useRef();
  const numberRef = useRef();
  const newValue = 450 - (450 * value) / 100;

  useEffect(() => {
    if (numberRef.current !== undefined) {
      let counter = 0;
      setInterval(() => {
        if (counter == value) {
          clearInterval;
        } else {
          counter += 1;
          numberRef.current.innerText = `${counter}%`;
        }
      }, 18);

      let x = 450;
      setInterval(() => {
        if (x <= newValue) {
          clearInterval;
        } else {
          x -= 1;
          circleRef.current.style.strokeDashoffset = x;
          
        }
      }, 1);
    }
  }, []);

  return (
    <div >
      <div style={style.skill}>
        <div style={style.outer}>
          <div style={style.inner}>
            <div ref={numberRef} ></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" style={{position: 'absolute', top: '0', left: '0' }} >
          <defs>
            <linearGradient id="gColor">
              <stop offset={"0%"} stopColor={from ?? "#DA22FF"} />
              <stop offset={"100%"} stopColor={to ?? "#9733EE"} />
            </linearGradient>
          </defs>
          <circle ref={circleRef} cx="80" cy="80" r="70" strokeLinecap="round" style={style.circle} />
        </svg>
      </div>
    </div>
  );
}
// style={{ position: 'absolute', top: '0', left: '0' }}

const style = {
  skill: {
    width: "160px",
    height: "160px",
    position: "relative",
  },
  // 39 39 42 
  outer: {
    width: "160px",
    height: "160px",
    padding: "20px",
    boxShadow: `6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(39, 39, 42, 0.7)`,
    borderRadius: '50%'
  },
  inner: {
    height: "120px",
    width: "120px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: `50%`,
    boxShadow: `inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    inset -4px -4px 6px -1px rgba(39, 39, 42,0.7),
    -0.5px -0.5px 0px  rgba(39, 39, 42,1),
    0.5px 0.5px 0px  rgba(0,0,0,0.15),
    0px 12px 10px -10px rgba(0,0,0,0.05)`,
  },

  circle: {

    fill: 'none',
    stroke: 'url(#gColor)',
    strokeWidth: '20px',
    strokeDasharray: '450',
    strokeDashoffset: '450'

  }
};

export default RoundSkillBar;
