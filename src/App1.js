import { useEffect, useState } from "react";
import "./App.css";
import AudioPlayer from './AudioPlayer.js';


function getQueryParamValue(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}


function App() {
  const [name, setName] = useState("QUESITO");

  useEffect(() => {
    const name = getQueryParamValue("novia");
    if (name) {
      document.title = `Flores para ${name}`;
      setName(name);
    }
  }, []);

  return (
    <>
      {
        name && <h1>Una Flor amarilla de parte de <b><u>PAN</u></b> para mi <b><u>{name}</u></b>, Te amo demasiado</h1>
      }

      <div className="flower">
        <div className="mid"></div>
        <div className="Petal1 p1"></div>
        <div className="Petal1 p2"></div>
        <div className="Petal1 p3"></div>
        <div className="Petal1 p4"></div>
        <div className="Petal2 p1"></div>
        <div className="Petal2 p2"></div>
        <div className="Petal2 p3"></div>
        <div className="Petal2 p4"></div>
        <div className="Petal3 p1"></div>
        <div className="Petal3 p2"></div>
        <div className="Petal3 p3"></div>
        <div className="Petal3 p4"></div>
      </div>
      <div className="flower-container">
        <div className="leaf-left"></div>
        <div className="leaf-right"></div>
        <div className="stem"></div>
      </div>      
        <AudioPlayer />
    </>
  );
}

export default App;