import './Acontent-cms.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


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
                    <Label className='contenido-cms-Fecha-acontent'>
                        <p>Fecha de Publicacion</p>
                        <Input type="date"/>
                    </Label>
                    <Label className='contenido-cms-Hora-acontent'>
                        <p>Hora</p>
                        <Input type="time" />
                    </Label>
                </div>
                <div className="container-int-seccion-acontent">
                    <Label className='contenido-cms-seccion-acontent'>
                        <p>Sección</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </Label>
                    <Label className='contenido-cms-seccion-acontent'>
                        <p>Autor</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </Label>
                    <Label className='contenido-cms-seccion-acontent'>
                        <p>Categoía</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </Label>
                    <Label htmlFor="picture" className='contenido-img-cms-acontent'>
                        <p>Imagen</p>
                        <Input id="picture" type="file"  required className='img-cms-acontent'/>
                    </Label>
                    
                    <Label className='contenido-titulo-cms-acontent'> 
                        <p>Título</p>
                        <Input
                            type="text"
                            className="titulo-cms-acontent"
                        />
                    </Label>
                    <Label className='contenido-contenido-cms-acontent'>
                        <p>Contenido</p>
                        <div className="contenido-text-area-cms-acontent">
                            <div className="contenido-text-area-cms-acontent-nav"></div>
                            <textarea className="text-area-cms-acontent"/>    
                        </div>
                    </Label>
                    
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