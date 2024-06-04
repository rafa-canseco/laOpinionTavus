import "./Gen-aI.css";
import Navbar from "../../components/nav-bar/nav-bar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SpinnerModal from "../../components/modal-spiner/Modal Spinner";

const GENAI = () => {
  const location = useLocation();
  const article = location.state?.article;
  const [selectedNote] = useState(article ? article.attributes.Contenido.map((content:any) => content.children[0].text).join(" ") : "");
  const [summary, setSummary] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrls, setVideoUrls] = useState({
    downloadUrl: "",
    streamUrl: "",
  });
  const [wordCount, setWordCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
        updateWordCount(response.data.response);
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
    setShowModal(true); 
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
    setShowModal(false); 
  };

  const updateWordCount = (text:any) => {
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
  };

  const handleSummaryChange = (e:any) => {
    const newText = e.target.value;
    setSummary(newText);
    updateWordCount(newText);
  };

  return (
    <div className="container-ext">
      <Navbar />
      <div className="container-main">
        <div className="container-int-Encabezado">
          <div className="container-titulo-G">
            <h2>
              <b>{article ? article.attributes.Titulo : "Encabezado"}</b>
            </h2>
          </div>
          <div className="container-encabezado-contenido">
            <p className="text-area">{selectedNote}</p>
          </div>
          <div className="container-boton">
            <Button onClick={handleGenerateSummary} disabled={isLoading}>
              <p>GENERAR RESUMEN</p>
            </Button>
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
              onChange={handleSummaryChange}
              placeholder="Aquí aparecerá el resumen de la nota seleccionada."
              disabled={isLoading}
            />
          </div>
          <div className="contador-editor-p">
              <p>Palabras: {wordCount}</p>
            </div>
          <div className="container-boton">
            <Input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Introduce un título para el video"
              disabled={isLoading}
            />
            <Button onClick={handleGenerateVideo} disabled={isLoading}>
              <p>GENERAR VIDEO</p>
            </Button>
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
              <Button>
                <p>Descargar Video</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <SpinnerModal isVisible={showModal} message="Generando video..." />
    </div>
  );
};

export default GENAI;
