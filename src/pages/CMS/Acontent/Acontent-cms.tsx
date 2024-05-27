import './Acontent-cms.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const AcontentCMS = () => {
    
    
    const [selectedOption, setSelectedOption] = useState('');

  return(
    <div className="container-ext-cms">
        <div className="navbar-cms-acontent">
            <div className="container-cms-back">
                <Link to="/home-cms"><p>&#9667;</p></Link>
                <Link to="/home-cms"><p>Back</p></Link>
                
            </div>
            <div className="container-cms-guardar-acontent">
                <p>Guardar</p>
            </div>
        </div>
        <div className="contenido-cms-acontent">
            <form>
                <div className="container-int-fechaH">
                    <label className='contenido-cms-Fecha-acontent'>
                        <p>Fecha de Publicacion</p>
                        <input type="date"/>
                    </label>
                    <label className='contenido-cms-Hora-acontent'>
                        <p>Hora</p>
                        <input type="time" />
                    </label>
                </div>
                <div className="container-int-seccion-acontent">
                    <label className='contenido-cms-seccion-acontent'>
                        <p>Sección</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </label>
                    <label className='contenido-cms-seccion-acontent'>
                        <p>Autor</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </label>
                    <label className='contenido-cms-seccion-acontent'>
                        <p>Categoía</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </label>
                    <label className='contenido-img-cms-acontent'>
                        <p>Imagen</p>
                        <input type="file" accept="image/*"  required className='img-cms-acontent'/>
                    </label>
                    <label className='contenido-titulo-cms-acontent'> 
                        <p>Título</p>
                        <input
                            type="text"
                            className="titulo-cms-acontent"
                        />
                    </label>
                    <label className='contenido-contenido-cms-acontent'>
                        <p>Contenido</p>
                        <div className="contenido-text-area-cms-acontent">
                            <div className="contenido-text-area-cms-acontent-nav"></div>
                            <textarea className="text-area-cms-acontent"/>    
                        </div>
                    </label>
                    
                </div>
            </form>
            
        </div>
        
    </div>
  )
}

export default AcontentCMS;


/*
seccion:
<option value="opcion1">Política</option>
                            <option value="opcion2">Empresa</option>
                            <option value="opcion3">Policía</option>
                            <option value="opcion4">Estado</option>
                            <option value="opcion5">Columna</option>
                            <option value="opcion6">Social</option>
                            <option value="opcion7">Farándula</option>
                            <option value="opcion8">Deportes</option>

*/