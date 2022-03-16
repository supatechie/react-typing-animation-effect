import React from "react";
import Typed from "react-typed";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">React Typing Animation Effect</h1>{" "}
      </div>
      <div className="animated-typing">
        <Typed
          strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
      <div className="buttons">
        <button className="btn-pink">Learn More</button>
        <button className="btn-purple">Talk To Us Now</button>
      </div>
    </div>
  );
}
// Background photo credit
//<a href="https://www.freevector.com/fluid-gradient-background-30355">FreeVector.com</a>
//<a href="https://www.freevector.com/creative-geometric-background-30347">FreeVector.com</a>
//<a href="https://www.freevector.com/minimal-dynamic-background-30348">FreeVector.com</a>
export default App;
