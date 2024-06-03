
import './Video-gen.css';
import Navbar from '../../components/nav-bar/nav-bar';
import { Button } from "@/components/ui/button"
const Videogen = () => {
 
  return(
    <div className="container-ext">
      <Navbar/>
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
        <div className="content-vid-gen">
            <div className='content-vid-gen-Video'>
                <div className="container-video-gen"></div>
            </div>
            <div className='content-vid-gen-Titulo'>
                <p>Título Del Video</p>
            </div>
            <div className='content-vid-gen-Fecha'>
                <p>27 de Mayo</p>
                <p>3:15pm</p>
            </div>
            <div className='content-vid-gen-Descarga'>
                <p>Descargar ⬇</p>
            </div>
        </div>
        <div className="content-vid-gen">
            <div className='content-vid-gen-Video'>
                <div className="container-video-gen"></div>
            </div>
            <div className='content-vid-gen-Titulo'>
                <p>Título Del Video</p>
            </div>
            <div className='content-vid-gen-Fecha'>
                <p>27 de Mayo</p>
                <p>3:15pm</p>
            </div>
            <div className='content-vid-gen-Descarga'>
                <p>Descargar ⬇</p>
            </div>
        </div>
        <div className="content-vid-gen">
            <div className='content-vid-gen-Video'>
                <div className="container-video-gen"></div>
            </div>
            <div className='content-vid-gen-Titulo'>
                <p>Título Del Video</p>
            </div>
            <div className='content-vid-gen-Fecha'>
                <p>27 de Mayo</p>
                <p>3:15pm</p>
            </div>
            <div className='content-vid-gen-Descarga'>
                <p>Descargar ⬇</p>
            </div>
        </div>
        <div className='restante'>

        </div>
    </div>
  )
}

export default Videogen;
