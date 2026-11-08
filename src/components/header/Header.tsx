import { basePath } from "@/baseUrl"
import "./header.css"

export default function Header() {
  return (
    <header>
        <div>
            <img 
              className="cerebro-cima" 
              src={`${basePath}/cerebro.png `}
              alt="Imagem referente a um cérebro cartoon" 
            />
            <h1>Pedro Rocha Araujo</h1>
            <img 
              className="header" 
              src={`${basePath}/header-image.png`} 
              alt="Imagem de duas pessoas se divertindo no espaço" 
            />
            <img 
              className="cerebro-baixo" 
              src={`${basePath}/cerebro.png`} 
              alt="Imagem referente a um cérebro cartoon" 
            />    
        </div>
    </header>
  )
}