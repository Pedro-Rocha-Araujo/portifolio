import "./projetos.css"

export default function Projetos() {
  return (
    <section className="projetos">
        <h2><i className="fa-solid fa-rocket"></i> Projetos</h2>
        <div className="projetos">

            <div className="projeto">
                <h3><i className="fa-solid fa-stethoscope"></i> Clínica</h3>
                <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo/dashboard-clinica">                        
                    <img 
                      src="./projetos/projeto-clinica.png" 
                      alt="Link para o projeto Dasboard Clínica"
                    />
                </a>
            </div>
            
            <div className="projeto">
                <h3><i className="fa-solid fa-scissors"></i> Barbearia</h3>
                <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo/barber-manager">
                    <img 
                      src="./projetos/projeto-barber.png" 
                      alt="Link para o projeto barbearia desenvolvido em MongoDb"
                    />
                </a>
            </div>
            
            <div className="projeto">
                <h3><i className="fa-solid fa-house"></i> Imobiliária</h3>
                <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo/venda-de-imoveis">
                    <img 
                      src="./projetos/projeto-imobiliaria.png" 
                      alt="Imagem do projeto Desenvolvido para imobiliária, feito em React, Node e MongoDb"
                    /> 
                </a>
            </div>
            
            
            <div className="projeto">
                <h3><i className="fa-solid fa-calculator"></i> Finanças</h3>
                <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo/projeto-financas">
                    <img 
                      src="./projetos/projeto-financas.png" 
                      alt="Link para o projeto finanças"
                    />
                </a>
            </div>

            <div className="projeto">
                <h3><i className="fa-solid fa-burger"></i> Restaurante</h3>
                <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo/restaurante">
                    <img 
                      src="./projetos/projeto-restaurante.png" 
                      alt="Link para o projeto restaurante"
                    /> 
                </a>
            </div>
            
            <div className="projeto">
                <h3><i className="fa-solid fa-briefcase"></i> Tech-Fix</h3>
                <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo/techfix-landing-page">
                    <img 
                      src="./projetos/landing-page-tech-fix.png" 
                      alt="Link para acessar o projeto de landing page desenvolvido para a empresa Tech-fix."
                    /> 
                </a>
            </div>
            
        </div>
    </section>
  )
}