import './Video-gen.css';
import { useEffect, useState } from 'react';
import Navbar from '../../components/nav-bar/nav-bar';
import { Button } from "@/components/ui/button"
import axios from 'axios';

interface Video {
    video_id: string;
    gif_thumbnail_url: string;
    video_name: string;
    created_at: string;
    download_url: string;
}

const Videogen = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://servidorscarlett.com/videos_tavus');
                console.log(response.data);
                const responseData = JSON.parse(response.data.response);
                if (responseData && responseData.data) {
                    const videosData = responseData.data;
                    setVideos(videosData);
                } else {
                    setError('La respuesta no tiene el formato esperado');
                }
            } catch (error) {
                console.log("Error al obtener los videos", error);
                setError('Error al obtener los videos. Por favor, intenta nuevamente más tarde.');
            }
        };
        fetchVideos();
    }, []);

    return (
        <div className="container-ext">
            <Navbar />
            <div className="container-titulo-vid-gen">
                <h1>VIDEOS GENERADOS</h1>
                <Button><p>CREAR NUEVO VIDEO</p></Button>
            </div>
            <div className="navbar-vid-gen">
                <div className='navbar-vid-gen-Video'>
                    <p>VIDEOS</p>
                </div>
                <div className='navbar-vid-gen-Titulo'>
                    <p>TÍTUILO</p>
                </div>
                <div className='navbar-vid-gen-Fecha'>
                    <p>FECHA DE CREACIÓN</p>
                </div>
            </div>
            {error && <p>{error}</p>}
            {videos.map((video) => (
                <div className="content-vid-gen" key={video.video_id}>
                    <div className='content-vid-gen-Video'>
                        <div className="container-video-gen">
                            <img src={video.gif_thumbnail_url} alt="Video Thumbnail" />
                        </div>
                    </div>
                    <div className='content-vid-gen-Titulo'>
                        <p>{video.video_name}</p>
                    </div>
                    <div className='content-vid-gen-Fecha'>
                        <p>{new Date(video.created_at).toLocaleDateString()}</p>
                        <p>{new Date(video.created_at).toLocaleTimeString()}</p>
                    </div>
                    <div className='content-vid-gen-Descarga'>
                        <a href={video.download_url} target="_blank" rel="noopener noreferrer">Descargar ⬇</a>
                    </div>
                </div>
            ))}
            <div className='restante'></div>
        </div>
    )
}

export default Videogen;