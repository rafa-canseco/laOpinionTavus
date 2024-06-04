import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Navbar from "../../components/nav-bar/nav-bar";

interface Article {
  id: number;
  attributes: {
    Titulo: string;
    Contenido: { children: { text: string }[] }[];
  };
}

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Política");
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async (category:any, page:any) => {
      try {
        const response = await axios.get(
          `https://jellyfish-app-vfu6c.ondigitalocean.app/api/articles`, {
            params: {
              'filters[Categoria][Nombre][$eq]': category,
              'pagination[page]': page,
              'pagination[pageSize]': 10,
              'sort': ['Fecha_de_Publicacion:desc'],
              'populate': '*'
            }
          }
        );
        setArticles(response.data.data);
      } catch (error) {
        console.log("error fetching articles", error);
      }
    };

    fetchArticles(activeCategory, page);
  }, [activeCategory, page]);

  const handleClick = (category: string) => {
    setActiveCategory(category);
    console.log(category)
    setPage(1); 
  };
  
  const handleArticleClick = (article: any) => {
    navigate("/gen-ai", {state: {article}})
  }

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container-ext">
      <Navbar />
      <div className="container-int">
        <aside className="categorias">
          <h1 className="titulo">Categorias</h1>
          {["CAPITAL", "EMPRESA", "ESTADO", "UNIVERSIDAD", "POLÍTICA", "POLICÍA", "FARÁNDULA", "DEPORTES", "NACIONAL", "COLUMNA", "CULTURA", "EDUCACIÓN", "SALUD", "ECONOMÍA", "GLOBAL"].map(category => (
            <div
              key={category}
              className={`categoria ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleClick(category)}
            >
              <p>{category}</p>
            </div>
          ))}
        </aside>
        <div className="main">
          <div className="container-Fecha">
            <div className="categoria-activa">
              <p>{activeCategory}</p>
            </div>
            <div className="Fecha">
              <p className="Flechas" onClick={handlePreviousPage}>◀</p>
              <p className="Fechas-sele">Página {page}</p>
              <p className="Flechas" onClick={handleNextPage}>▶</p>
            </div>
          </div>
          <div className="container-contenido">
            {articles.map((article) => (
              <div className="contenido" key={article.id} onClick={() => handleArticleClick(article)}>
                <div className="contenido-image">
                  <div className="img-contenido"></div>
                </div>
                <div className="contenido-total">
                  <div className="contenido-titulo">
                    <h1>{article.attributes.Titulo}</h1>
                  </div>
                  <div className="contenido-text">
                    {article.attributes.Contenido.map((content, index) => (
                      <p key={index}>{content.children[0].text}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;