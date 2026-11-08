import "./perfil.css"

export default function Perfil() {
  return (
    <section className="perfil">
        <h2><i className="fa-solid fa-lightbulb"></i> Olá!</h2>
        <img 
          src="./portifolio/foto-perfil.png" 
          alt="Minha foto de perfil" 
        />
        <div className="texto-maior">
            <p>Me chamo Pedro, sou graduado em Gestão da Tecnologia da Informação e desenvolvedor web Full-stack.</p>
        </div>
    </section>
  )
}