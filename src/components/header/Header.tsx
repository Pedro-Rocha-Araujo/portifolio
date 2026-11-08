import "./header.css"

export default function Header() {
  return (
    <header>
        <div>
            <img 
              className="cerebro-cima" 
              src="./cerebro.png" 
              alt="Imagem referente a um cérebro cartoon" 
            />
            <h1>Pedro Rocha Araujo</h1>
            <img 
              className="header" 
              src="./header-image.png" 
              alt="Imagem de duas pessoas se divertindo no espaço" 
            />
            <img 
              className="cerebro-baixo" 
              src="./cerebro.png" 
              alt="Imagem referente a um cérebro cartoon" 
            />    
        </div>
    </header>
  )
}