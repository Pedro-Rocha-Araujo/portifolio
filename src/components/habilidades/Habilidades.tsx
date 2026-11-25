import { basePath } from "@/baseUrl"
import "./habilidades.css"

export default function Habilidades() {
  return (
    <section className="habilidades">
        <h2><i className="fa-solid fa-palette"></i> Processo de criação</h2>
        <div className="conteudo">
            <img 
              src={`${basePath}/programacao-p.png `}
              alt="imagem cartoon de uma pessoa programando" 
            />
            <div className="texto">
                <p>Cada projeto exige uma abordagem única. Por isso construo soluções personalizadas, unindo uma arquitetura sólida, usabilidade clara e um design responsivo. Meu objetivo é resolver problemas reais e entregar uma experiência clara para quem usa.</p>
            </div>
        </div>
    </section>
  )
}