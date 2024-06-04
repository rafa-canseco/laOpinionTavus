import './home-cms.css';
import { Link } from 'react-router-dom';

const HomeCMS = () => {
  /*function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }*/

  return(
    <div className="container-ext-cms-home">
        <div className="navbar-cms-home">
            <div className='Id-cms'><p>ID</p></div>
            <div className='Titulo-cms'><p>TITULO</p></div>
            <div className='Fecha-cms'><p>FECHA</p></div>
            <div className='State-cms'><p>STATE</p></div>
        </div>
        <div className="contenido-cms-home">
            <Link to="/editcontent-cms">
              <div className="cms-home-content">
                <div className='Id-cms-content'><p>01</p></div>
                <div className='Titulo-cms-content'><p>Este es el título</p></div>
                <div className='Fecha-cms-content'><p>May 20,2024 at 4:30PM</p></div>
                <div className='State-cms-content'><div className="cms-home-content-estado"><p>Published</p></div></div>
              </div>
            </Link>
            <Link to="/editcontent-cms">
              <div className="cms-home-content">
                <div className='Id-cms-content'><p>01</p></div>
                <div className='Titulo-cms-content'><p>Este es el título</p></div>
                <div className='Fecha-cms-content'><p>May 20,2024 at 4:30PM</p></div>
                <div className='State-cms-content'><div className="cms-home-content-estado"><p>Published</p></div></div>
              </div>
            </Link>
            <Link to="/editcontent-cms">
              <div className="cms-home-content">
                <div className='Id-cms-content'><p>01</p></div>
                <div className='Titulo-cms-content'><p>Este es el título</p></div>
                <div className='Fecha-cms-content'><p>May 20,2024 at 4:30PM</p></div>
                <div className='State-cms-content'><div className="cms-home-content-estado"><p>Published</p></div></div>
              </div>
            </Link>
            <Link to="/editcontent-cms">
              <div className="cms-home-content">
                <div className='Id-cms-content'><p>01</p></div>
                <div className='Titulo-cms-content'><p>Este es el título</p></div>
                <div className='Fecha-cms-content'><p>May 20,2024 at 4:30PM</p></div>
                <div className='State-cms-content'><div className="cms-home-content-estado-draft"><p>Draft</p></div></div>
              </div>
            </Link>
            <Link to="/editcontent-cms">
              <div className="cms-home-content">
                <div className='Id-cms-content'><p>01</p></div>
                <div className='Titulo-cms-content'><p>Este es el título</p></div>
                <div className='Fecha-cms-content'><p>May 20,2024 at 4:30PM</p></div>
                <div className='State-cms-content'><div className="cms-home-content-estado"><p>Published</p></div></div>
              </div>
            </Link>
            <Link to="/editcontent-cms">
              <div className="cms-home-content">
                <div className='Id-cms-content'><p>01</p></div>
                <div className='Titulo-cms-content'><p>Este es el título</p></div>
                <div className='Fecha-cms-content'><p>May 20,2024 at 4:30PM</p></div>
                <div className='State-cms-content'><div className="cms-home-content-estado-draft"><p>Draft</p></div></div>
              </div>
            </Link>
            <div className="container-boton-add-cms">
                <Link to="/acontent-cms"><button className='boton-cms'>&#8853;</button></Link>
            </div>
        </div>
        
    </div>
  )
}

export default HomeCMS;
