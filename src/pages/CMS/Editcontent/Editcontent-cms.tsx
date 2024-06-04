import './Editcontent-cms.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const EditcontentCMS = () => {
    
    
    const [selectedOption, setSelectedOption] = useState('');

  return(
    <div className="container-ext-Acms">
        <div className="navbar-cms-edit">
            <div className="container-cms-back">
                <Link to="/home-cms"><p>&#9667;</p></Link>
                <Link to="/home-cms"><p>Back</p></Link>
                
            </div>
            <div className="container-cms-actions">
                <div className="container-cms-publicar-edit">
                    <p>Borrar</p>
                </div>
                <div className="container-cms-guardar-edit">
                    <p>Guardar</p>
                </div>
            </div>
        </div>
        <div className="contenido-cms-edit">
            <form>
                <div className="container-int-fechaH">
                    <Label className='contenido-cms-Fecha-edit'>
                        <p>Fecha de Publicacion</p>
                        <Input type="date"/>
                    </Label>
                    <Label className='contenido-cms-Hora-edit'>
                        <p>Hora</p>
                        <Input type="time" />
                    </Label>
                </div>
                <div className="container-int-seccion-edit">
                    <Label className='contenido-cms-seccion-edit'>
                        <p>Sección</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </Label>
                    <Label className='contenido-cms-seccion-edit'>
                        <p>Autor</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </Label>
                    <Label className='contenido-cms-seccion-edit'>
                        <p>Categoía</p>
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="" disabled>-- Selecciona una opción --</option>
                        </select>
                    </Label>
                    <Label htmlFor="picture" className='contenido-img-cms-edit'>
                        <p>Imagen</p>
                        <div className='img-cms-edit'>
                            <Input id="picture" type="file"  required/>
                        </div>
                    </Label>
                    
                    <Label className='contenido-titulo-cms-edit'> 
                        <p>Título</p>
                        <Input
                            type="text"
                            className="titulo-cms-edit"
                        />
                    </Label>
                    <Label className='contenido-contenido-cms-edit'>
                        <p>Contenido</p>
                        <div className="contenido-text-area-cms-edit">
                            <div className="contenido-text-area-cms-edit-nav"></div>
                            <textarea className="text-area-cms-edit"/>    
                        </div>
                    </Label>
                    
                </div>
            </form>
            
        </div>
        
    </div>
  )
}

export default EditcontentCMS;