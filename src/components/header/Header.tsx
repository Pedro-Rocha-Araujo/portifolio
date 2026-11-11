import { basePath } from "@/baseUrl"
import "./header.css"

export default function Header() {
  return (
    <header>
      <div>
        <h1>Pedro Rocha Araujo</h1>
        <img 
          className="header" 
          src={`${basePath}/header-image.png`} 
          alt="Imagem de duas pessoas se divertindo no espaço" 
        />   
      </div>
    </header>
  )
}