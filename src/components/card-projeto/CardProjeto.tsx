import "./card-projeto.css"
import { ProjetoInterface } from "@/projetos"

interface CardProjetoProps {
  projeto: ProjetoInterface
  fecharCard: ()=> void
}

export default function CardProjeto({ projeto, fecharCard }: CardProjetoProps) {
  return (
    <div className="background">
      
      <div className="card">
        <div className="infos">
          <h1><i className={projeto.icon}></i> {projeto.name}</h1>
          <a target="_blank" href={projeto.href}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <img 
          src={projeto.src}
        />
        <button onClick={fecharCard} className="red">
          Fechar
        </button>
      </div>

    </div>
  )
}