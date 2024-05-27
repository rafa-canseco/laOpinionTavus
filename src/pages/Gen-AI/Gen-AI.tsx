import "./Gen-AI.css";
import Navbar from "../../components/nav-bar/nav-bar";
import React, { useState } from "react";
import axios from "axios";

const GENAI = () => {
  const [selectedNote] =
    useState(`El Servicio Meteorológico Nacional (NWS, en inglés) informó que las tormentas fuertes y las amenazas de lluvias excesivas se mantienen hoy desde el sur de las Planicies, en el centro del país, hasta el sudeste, y continuarán su curso al este hasta el viernes.
El jueves un frente que se extiende desde la costa del Atlántico hacia el oeste al valle del río Ohio y hacia el sudoeste a las altas Planicies, se trasladará hacia la costa atlántica el viernes y permanecerá sobre Florida el sábado”, indicó el NWS.
El sheriff del condado Clairborne, en Tennessee, Bob Books, informó de la muerte de un hombre de 22 años de edad que estaba adentro de un vehículo aplastado por la caída de un árbol.`);
  const [summary, setSummary] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrls, setVideoUrls] = useState({
    downloadUrl: "",
    streamUrl: "",
  });

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    const requestData = {
      text: selectedNote,
    };
    try {
      const response = await axios.post(
        "https://servidorscarlett.com/generate_resume",
        requestData
      );
      if (response.status === 200) {
        setSummary(response.data.response);
      } else {
        console.error("Error en la respuesta del servidor");
        setSummary("Error al generar el resumen.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
      setSummary("Error al conectar con el servicio.");
    }
    setIsLoading(false);
  };

  const handleGenerateVideo = async () => {
    setIsLoading(true);
    const requestData = {
      script: summary,
      title: videoTitle,
    };
    try {
      const response = await axios.post(
        "https://servidorscarlett.com/tavus_endpoint",
        requestData
      );
      if (response.status === 200) {
        setVideoUrls({
          downloadUrl: response.data.download_url,
          streamUrl: response.data.stream_url,
        });
      } else {
        console.error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
    setIsLoading(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleGenerateSummary();
    }
  };

  /*
    const [isFocused, setIsFocused] = useState(false);
    */

  return (
    <div className="container-ext" onKeyDown={handleKeyDown}>
      <Navbar />
      <div className="container-main">
        <div className="container-int-Encabezado">
          <div className="container-titulo-G">
            <h2>
              <b>Encabezado</b>
            </h2>
          </div>
          <div className="container-encabezado-contenido">
            <p className="text-area">{selectedNote}</p>
          </div>
          <div className="container-boton">
            <button onClick={handleGenerateSummary} disabled={isLoading}>
              <p>GENERAR RESUMEN</p>
            </button>
          </div>
        </div>
        <div className="container-int-Editor">
          <div className="container-titulo-G">
            <h2>
              <b>EDITOR DE TEXTO</b>
            </h2>
          </div>
          <div className="container-editor-contenido">
            <textarea
              className="text-area"
              value={isLoading ? "Generando resumen de la nota..." : summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Aquí aparecerá el resumen de la nota seleccionada."
              disabled={isLoading}
            />
          </div>
          <div className="container-boton">
            <input
              type="text"
              className="titulo-video-gen-ai"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Introduce un título para el video"
              disabled={isLoading}
            />
            <button onClick={handleGenerateVideo} disabled={isLoading}>
              <p>GENERAR VIDEO</p>
            </button>
          </div>

          <div className="container-video-descargable">
            {videoUrls.streamUrl && (
              <div>
                <video
                  controls
                  src={videoUrls.streamUrl}
                  className="D-video"
                ></video>
              </div>
            )}
          </div>

          <div className="container-boton-DonwloadVideo">
            <a href={videoUrls.downloadUrl} download>
              <button>
                <p>Descargar Video</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GENAI;

/*
<div className="contatiner-ext">
        <Navbar/>
        <div className="container-int-titulo">
            <h1>Generador AI</h1>
        </div>
        <div className="container-main">
            <div className="container-int-Encabezado">
                <div className="container-titulo-G">
                    <h2><b>Encabezado</b></h2>
                </div>
                <div className='container-encabezado-contenido'>
                    <textarea className="text-area" value={text} onFocus={handleFocus} onChange={handleChange} onBlur={() => setIsFocused(false)}/>
                </div>
                <div className="container-boton">
                    <button><p>GENERAR RESUMEN</p></button>
                </div>
                
            </div>
            <div className="container-int-Editor">
                <div className="container-titulo-G">
                    <h2><b>EDITOR DE TEXTO</b></h2>
                </div>
                <div className="container-editor-contenido">
                    <textarea className="text-area" value={text2} onFocus={handleFocus2} onChange={handleChange2} onBlur={() => setIsFocused(false)}/>
                </div>
                <div className="container-boton">
                    <button><p>GENERAR VIDEO</p></button>
                </div>
                <div className="container-video-descargable"></div>
                <div className="container-boton-DonwloadVideo">
                    <button><p>DESCARGAR VIDEO</p></button>
                </div>
                
            </div>
        </div>
    </div> */
