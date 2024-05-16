import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/nav-bar/nav-bar';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Política');

  const handleClick = (category: string) => {
    setActiveCategory(category);
  }

  return(
    <div className="container-ext">
      <Navbar/>
      <div className="container-int">
        <aside className='categorias'>
          <h1 className='titulo'>Categorias</h1>
          <div className={`categoria ${activeCategory === 'Política' ? 'active' : ''}`} onClick={() => handleClick('Política')}><p>Política</p></div>
          <div className={`categoria ${activeCategory === 'Empresa' ? 'active' : ''}`} onClick={() => handleClick('Empresa')}><p>Empresa</p></div>
          <div className={`categoria ${activeCategory === 'Policía' ? 'active' : ''}`} onClick={() => handleClick('Policía')}><p>Policía</p></div>
          <div className={`categoria ${activeCategory === 'Estado' ? 'active' : ''}`} onClick={() => handleClick('Estado')}><p>Estado</p></div>
          <div className={`categoria ${activeCategory === 'Columna' ? 'active' : ''}`} onClick={() => handleClick('Columna')}><p>Columna</p></div>
          <div className={`categoria ${activeCategory === 'Social' ? 'active' : ''}`} onClick={() => handleClick('Social')}><p>Social</p></div>
          <div className={`categoria ${activeCategory === 'Farándula' ? 'active' : ''}`} onClick={() => handleClick('Farándula')}><p>Farándula</p></div>
          <div className={`categoria ${activeCategory === 'Deportes' ? 'active' : ''}`} onClick={() => handleClick('Deportes')}><p>Deportes</p></div>
        </aside>
        <div className='main'>
          <div className="container-Fecha">
            <div className="categoria-activa">
              <p>{activeCategory}</p>
            </div>
            <div className='Fecha'>
                <p className='Flechas'>◀</p>
                <p className='Fechas-sele'>HOY</p>
                <p className='Flechas'>▶</p>
            </div>
          </div>
          <div className="container-contenido">
            <div className="contenido">
                <div className="contenido-image">
                    <div className="img-contenido"></div>
                </div>
                <div className="contenido-total">
                    <div className="contenido-titulo">
                        <h1>Encabezado</h1>
                    </div>
                    <div className="contenido-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et facere, ex officia voluptatibus totam blanditiis quasi, incidunt suscipit quibusdam vel quaerat perspiciatis alias voluptatem inventore impedit, ab soluta quisquam!</p>
                    </div>
                </div>
            </div>
            <div className="contenido">
                <div className="contenido-image">
                    <div className="img-contenido"></div>
                </div>
                <div className="contenido-total">
                    <div className="contenido-titulo">
                        <h1>Encabezado</h1>
                    </div>
                    <div className="contenido-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et facere, ex officia voluptatibus totam blanditiis quasi, incidunt suscipit quibusdam vel quaerat perspiciatis alias voluptatem inventore impedit, ab soluta quisquam!</p>
                    </div>
                </div>
            </div>
            <div className="contenido">
                <div className="contenido-image">
                    <div className="img-contenido"></div>
                </div>
                <div className="contenido-total">
                    <div className="contenido-titulo">
                        <h1>Encabezado</h1>
                    </div>
                    <div className="contenido-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et facere, ex officia voluptatibus totam blanditiis quasi, incidunt suscipit quibusdam vel quaerat perspiciatis alias voluptatem inventore impedit, ab soluta quisquam!</p>
                    </div>
                </div>
            </div>
            <div className="contenido">
                <div className="contenido-image">
                    <div className="img-contenido"></div>
                </div>
                <div className="contenido-total">
                    <div className="contenido-titulo">
                        <h1>Encabezado</h1>
                    </div>
                    <div className="contenido-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et facere, ex officia voluptatibus totam blanditiis quasi, incidunt suscipit quibusdam vel quaerat perspiciatis alias voluptatem inventore impedit, ab soluta quisquam!</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
