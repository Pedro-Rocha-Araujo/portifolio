import { basePath } from "@/baseUrl"
import "./habilidades.css"

export default function Habilidades() {
  return (
    <section className="habilidades">
        <h2><i className="fa-solid fa-palette"></i> Processo de criação</h2>
        <div className="conteudo">
            <img 
              src={`./${basePath}portifolio/programacao.png `}
              alt="imagem cartoon de uma pessoa programando" 
            />
            <div className="texto">
                <p>Acredito que cada projeto possui suas próprias necessidades. Por isso, desenvolvo soluções personalizadas, unindo funcionalidade, usabilidade e design. Meu objetivo é criar experiências que comuniquem com o usuário final e atendam aos objetivos do projeto.</p>
            </div>
        </div>
    </section>
  )
}