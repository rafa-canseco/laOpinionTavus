import './Gen-AI.css';
import Navbar from '../../components/nav-bar/nav-bar';
import React, { useState } from 'react';

const GENAI = () => {
    /* Texto del Encabezado */
    const [text, setText] = useState('Texto de la nota. Texto de la nota.');
    
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        if (!isFocused) {
        setText('');
        setIsFocused(true);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };
    /* Texto del editor de texto */
    const [text2, setText2] = useState('Editor de texto para el resumen generado, que a su vez será convertido en video para el avatar de inteligencia artificial. Editor de texto para el resumen generado, que a su vez será convertido en video para el avatar de inteligencia artificial. Editor de texto para el resumen generado, que a su vez será convertido en video para el avatar de inteligencia artificial. Editor de texto para el resumen generado, que a su vez será convertido en video para el avatar de inteligencia artificial. Editor de texto para el resumen generado, que a su vez será convertido en video para el avatar de inteligencia artificial. Editor de texto para el resumen generado, que a su vez será convertido en video para el avatar de inteligencia artificial.');
    const handleFocus2 = () => {
        if (!isFocused) {
        setText2('');
        setIsFocused(true);
        }
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText2(event.target.value);
    };



    return(
    <div className="contatiner-ext">
        <Navbar/>
        <div className="container-int-titulo">
            <h1>Generador AI</h1>
        </div>
        <div className="container-main">
            <div className="container-int-Encabezado">
                <div className="container-titulo-G">
                    <h2><b>Encabezado</b></h2>
                </div>
                <div className='container-encabezado-contenido'>
                    <textarea className="text-area" value={text} onFocus={handleFocus} onChange={handleChange} onBlur={() => setIsFocused(false)}/>
                </div>
                <div className="container-boton">
                    <button><p>GENERAR RESUMEN</p></button>
                </div>
                
            </div>
            <div className="container-int-Editor">
                <div className="container-titulo-G">
                    <h2><b>EDITOR DE TEXTO</b></h2>
                </div>
                <div className="container-editor-contenido">
                    <textarea className="text-area" value={text2} onFocus={handleFocus2} onChange={handleChange2} onBlur={() => setIsFocused(false)}/>
                </div>
                <div className="container-boton">
                    <button><p>GENERAR VIDEO</p></button>
                </div>
                <div className="container-video-descargable"></div>
                <div className="container-boton">
                    <button><p>DESCARGAR VIDEO</p></button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default GENAI;