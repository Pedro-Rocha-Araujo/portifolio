import { basePath } from "@/baseUrl"
import "./tecnologias.css"

export default function Tecnologias() {
  return (
    <section className="tecnologias">
      <h2><i className="fa-solid fa-wrench"></i> Tecnologias</h2>
      <div className="tecnologias">

        <div className="categorias">
            <h3><i className="fa-solid fa-display"></i> Front-end</h3>
            <img className="border-radius" 
              src={`${basePath}/tecnologias/react.png`} 
              alt="Logo da Biblioteca React.js" 
            />
            <img 
              src={`${basePath}/tecnologias/next.png`} 
              alt="Logo do Framework Next.js" 
            />
        </div>

        <div className="categorias">
            <h3><i className="fa-solid fa-code"></i> Back-end</h3>
            <img 
              src={`${basePath}/tecnologias/node.png`} 
              alt="Logo do Node.js" 
            />
            <img className="border-radius"
              src={`${basePath}/tecnologias/typescript.png`} 
              alt="Logo do superset Typescript" 
            />
        </div>

        <div className="categorias" >
            <h3><i className="fa-solid fa-database"></i> Data-base</h3>
            <img 
              src={`${basePath}/tecnologias/postgres.png`} 
              alt="Logo do MySQL" 
            />
            <img 
              src={`${basePath}/tecnologias/mongo.png`} 
              alt="Logo do MongoDb" 
            />
        </div>

      </div>
    </section>
  )
}