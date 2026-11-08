import "./tecnologias.css"

export default function Tecnologias() {
  return (
    <section className="tecnologias">
      <h2><i className="fa-solid fa-wrench"></i> Tecnologias</h2>
      <div className="tecnologias">

        <div className="categorias">
            <h3><i className="fa-solid fa-display"></i> Front-end</h3>
            <img 
              src="./portifolio/tecnologias/react.png" 
              alt="Logo da Biblioteca React.js" 
            />
            <img 
              src="./portifolio/tecnologias/next.png" 
              alt="Logo do Framework Next.js" 
            />
        </div>

        <div className="categorias">
            <h3><i className="fa-solid fa-code"></i> Back-end</h3>
            <img 
              src="./portifolio/tecnologias/node.png" 
              alt="Logo do Node.js" 
            />
            <img 
              src="./portifolio/tecnologias/typescript.png" 
              alt="Logo do superset Typescript" 
            />
        </div>

        <div className="categorias" >
            <h3><i className="fa-solid fa-database"></i> Data-base</h3>
            <img 
              src="./portifolio/tecnologias/mysql.png" 
              alt="Logo do MySQL" 
            />
            <img 
              src="./portifolio/tecnologias/mongo.png" 
              alt="Logo do MongoDb" 
            />
        </div>

      </div>
    </section>
  )
}