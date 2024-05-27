import React, { useState } from 'react';
import axios from "axios";

const Notes = () => {
  const [selectedNote] = useState(`El Servicio Meteorológico Nacional (NWS, en inglés) informó que las tormentas fuertes y las amenazas de lluvias excesivas se mantienen hoy desde el sur de las Planicies, en el centro del país, hasta el sudeste, y continuarán su curso al este hasta el viernes.
El jueves un frente que se extiende desde la costa del Atlántico hacia el oeste al valle del río Ohio y hacia el sudoeste a las altas Planicies, se trasladará hacia la costa atlántica el viernes y permanecerá sobre Florida el sábado”, indicó el NWS.
El sheriff del condado Clairborne, en Tennessee, Bob Books, informó de la muerte de un hombre de 22 años de edad que estaba adentro de un vehículo aplastado por la caída de un árbol.`);
  const [summary, setSummary] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrls, setVideoUrls] = useState({ downloadUrl: '', streamUrl: '' });

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    const requestData = {
      text: selectedNote
    };
    try {
      const response = await axios.post("https://servidorscarlett.com/generate_resume", requestData);
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
      title: videoTitle
    };
    try {
      const response = await axios.post("https://servidorscarlett.com/tavus_endpoint", requestData);
      if (response.status === 200) {
        setVideoUrls({
          downloadUrl: response.data.download_url,
          streamUrl: response.data.stream_url
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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4" onKeyDown={handleKeyDown}>
      <h1 className="text-3xl font-bold mb-4">Notas</h1>
      <p className="text-gray-700 mb-4">{selectedNote}</p>
      <textarea
        className="textarea textarea-bordered w-full max-w-lg mb-4"
        value={isLoading ? "Generando resumen de la nota..." : summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Aquí aparecerá el resumen de la nota seleccionada."
        disabled={isLoading}
      />
      <input
        type="text"
        className="input input-bordered w-full max-w-lg mb-4"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
        placeholder="Introduce un título para el video"
        disabled={isLoading}
      />
      <button
        className="btn btn-primary mb-2"
        onClick={handleGenerateSummary}
        disabled={isLoading}
      >
        Generar Resumen
      </button>
      <button
        className="btn btn-secondary"
        onClick={handleGenerateVideo}
        disabled={isLoading}
      >
        Generar Video
      </button>
      {videoUrls.streamUrl && (
        <div>
          <video controls src={videoUrls.streamUrl} className="w-full max-w-lg mt-4"></video>
          <a href={videoUrls.downloadUrl} className="btn btn-primary mt-2" download>Descargar Videos</a>
        </div>
      )}
    </div>
  );
};

export default Notes;
