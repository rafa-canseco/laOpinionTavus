import "./CMS.css"
import { Button } from "@/components/ui/button";


const CMS = () => {
    return(
        <div className="container_ext_cms">
            <div className="container_titulo_cms">
                <h1>Escoge la aplicacion:</h1>
            </div>
            <div className="container_opciones_cms">
                <a href="https://la-opinion-cms-delta.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Button>
                        <p>CMS Movil</p>
                    </Button>
                </a>

                <a href="https://www.laopinionapp.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                        <p>Avatar video</p>
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default CMS;