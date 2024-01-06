import React from "react";
import "./style.css";
import Navbar from "./Navbar"
import { useState, useEffect } from "react";
import Fader from "./Fader";


export default function App() {

  const [selectedOption, setSelectedOption] = useState("home");

  const renderContent = () => {
    switch (selectedOption) {
      case "home":
        return <Fader text="Hello Home"></Fader>;        
      case "products":
        return <Fader text="Hello Products"></Fader>;        
      case "automate":
        return <Fader text="Hello Automate"></Fader>;        
      // Add cases for other navbar options
      default:
        return null;
    }
  };
  
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
    <Navbar setSelectedOption={setSelectedOption} />
        <main>
          <div>
            <h1>CSS is Cool</h1>
            <p>
              I'm baby kale chips affogato ennui lumbersexual, williamsburg
              paleo quinoa iceland normcore tumeric. Kitsch coloring book
              retro, seitan schlitz tattooed biodiesel vexillologist neutra.
              Synth mumblecore deep v, umami selfies normcore gluten-free
              snackwave. Seitan ramps drinking vinegar venmo keytar,
              humblebrag VHS post-ironic tacos godard pour-over.
            </p>
          </div>
      </main>
    
  </body>
  </html>


  );
}
