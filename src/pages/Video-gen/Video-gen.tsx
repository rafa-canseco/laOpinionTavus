import './Video-gen.css';
import { useEffect, useState } from 'react';
import Navbar from '../../components/nav-bar/nav-bar';
import { Button } from "@/components/ui/button"
import axios from 'axios';

const Videogen = () => {
    const TAVUS = "4f3f337b336949fa84027c95900c5216";
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        'x-api-key': TAVUS
                    }
                };
                const response = await axios.get(
                    `/api/v2/videos`, options
                );
                setVideos(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log("error fetching articles", error);
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