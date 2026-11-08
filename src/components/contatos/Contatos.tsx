import "./contatos.css"

export default function Contatos() {
  return (
    <section className="contatos">
      <div>
        <h2><i className="fa-solid fa-phone"></i> Contatos</h2>
        <p>Tem um projeto em mente? Entre em contato e vamos traze-lo para a realidade.</p>
      </div>
      <div className="icones">
        <a target="_blank" href="https://wa.me/7988716812?text=Oi,%20vim%20pelo%20portfólio...">
          <i className="fa-brands fa-whatsapp fa-2xl"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/pedro-rocha-araujo-b4a823278/">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
        <a target="_blank" href="https://github.com/Pedro-Rocha-Araujo">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
      </div>
    </section>
  )
}