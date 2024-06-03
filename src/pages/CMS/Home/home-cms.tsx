import './home-cms.css';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const HomeCMS = () => {

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
                <Link to="/acontent-cms"><Button className='boton-cms'>&#8853;</Button></Link>
            </div>
            
        </div>
        
    </div>
  )
}

export default HomeCMS;
