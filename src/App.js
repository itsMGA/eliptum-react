import React from "react";
import "./style.css";
import Navbar from "./Navbar"
import { useState, useEffect } from "react";



export default function App() {

  const [counter, setCount] = useState(0);

  useEffect(() => {
    alert("test");
  }, []);

  return (
    <html><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script defer src="theme.js"></script>
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div className="person">
        <button onClick={() => setCount((prevCount) => prevCount - 1)} >-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCount((prevCount) => prevCount + 1)} >+</button>
      </div>
      <Navbar />
      <main>
        <h1>CSS is Cool</h1>
        <p>
          I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
          iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
          tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
          selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
          venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
        </p>
      </main>
    
  </body>
  </html>


  );
}
