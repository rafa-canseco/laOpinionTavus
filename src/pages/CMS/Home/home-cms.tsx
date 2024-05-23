import './Home-cms.css';
import { Link, useNavigate } from 'react-router-dom';


const HomeCMS = () => {
    const navigate = useNavigate();

  return(
    <div className="container-ext-cms">
        <div className="navbar-cms-home">
            <p className='Id-cms'>ID</p>
            <p className='Titulo-cms'>TITULO</p>
            <p className='Fecha-cms'>FECHA</p>
            <p className='State-cms'>STATE</p>
        </div>
        <div className="contenido-cms">
            <div className="container-boton-add-cms">
                <Link to="/acontent-cms"><button className='boton-cms'>&#8853;</button></Link>
            </div>
            
        </div>
        
    </div>
  )
}

export default HomeCMS;
