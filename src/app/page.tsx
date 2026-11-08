import Header from "@/components/header/Header"
import Perfil from "@/components/perfil/Perfil"
import Habilidades from "@/components/habilidades/Habilidades"
import Projetos from "@/components/projetos/Projetos"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import Contatos from "@/components/contatos/Contatos"
import Footer from "@/components/footer/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Perfil />
        <hr />
        <Habilidades />
        <hr />
        <Projetos />
        <hr />
        <Tecnologias />
        <hr />
        <Contatos />
      </main>
      <Footer />
    </div>
  );
}
