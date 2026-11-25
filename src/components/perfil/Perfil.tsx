import { basePath } from "@/baseUrl"
import "./perfil.css"

export default function Perfil() {
  return (
    <section className="perfil">
        <h2><i className="fa-solid fa-lightbulb"></i> Olá!</h2>
        <img 
          src={`${basePath}/foto-perfil.png`} 
          alt="Minha foto de perfil" 
        />
        <div className="texto-maior">
            <p>Sou desenvolvedor Web graduado em Gestão da Tecnologia da Informação pelo Instituto Federal de Sergipe. Transformo ideias e necessidades em aplicações completas, modernas e funcionais.</p>
        </div>
    </section>
  )
}