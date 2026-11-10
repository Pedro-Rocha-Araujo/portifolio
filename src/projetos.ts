import { basePath } from "./baseUrl"

export interface ProjetoInterface {
  name: string,
  icon: string,
  href: string,
  src: string,
  alt: string,
  stack: string,
  descricao: string
}

export const projetos = [
  {
    "name":"Clínica",
    "icon":"fa-solid fa-stethoscope",
    "href": "https://github.com/Pedro-Rocha-Araujo/dashboard-clinica",
    "src": `${basePath}/projetos/projeto-clinica.png`,
    "alt":"Link para o projeto Dasboard Clínica",
    "stack": "Typescript, Next, Node, Express, MongoDB",
    "descricao": "Aplicação web full-stack desenvolvida para a gestão de uma clínica, englobando o controle de senhas, pacientes e profissionais. O sistema ainda conta com uma interface totalmente responsiva, autenticação de usuário e criptografia de senhas, garantindo segurança e uma experiência fluida aos usuários."
  },
  {
    "name":"Barbearia",
    "icon":"fa-solid fa-scissors",
    "href": "https://github.com/Pedro-Rocha-Araujo/barber-manager",
    "src":`${basePath}/projetos/projeto-barber.png`,
    "alt":"Link para o projeto barbearia desenvolvido em MongoDb",
    "stack": "React, Node, Express, MongoDB",
    "descricao": "Sistema Web Full-stack desenvolvido para atender os requisitos de agendamento e gerenciamento de barbearias. A plataforma oferece uma interface responsiva com controle de sessão e níveis de acesso distintos para barbeiros e clientes, otimizando assim o fluxo de atendimento e a organização de horários."
  },
  {
    "name":"Imobiliária",
    "icon":"fa-solid fa-house",
    "href": "https://github.com/Pedro-Rocha-Araujo/venda-de-imoveis",
    "src":`${basePath}/projetos/projeto-imobiliaria.png`,
    "alt":"Imagem do projeto Desenvolvido para imobiliária, feito em React, Node e MongoDb",
    "stack": "React, Node, Express, MongoDB",
    "descricao": "Plataforma Web Full-stack projetada para facilitar o anúncio e a negociação de imóveis. O projeto possui uma interface mobile-first e recursos de segurança como autenticação e criptografia, além de integrar um canal de comunicação entre anunciantes e compradores em potencial."
  },
  {
    "name":"Finanças",
    "icon":"fa-solid fa-calculator",
    "href": "https://github.com/Pedro-Rocha-Araujo/projeto-financas",
    "src":`${basePath}/projetos/projeto-financas.png`,
    "alt":"Link para o projeto finanças",
    "stack": "React, FireBase",
    "descricao": "Projeto Front-end desenvolvido com abordagem Mobile-first para simplificar a gestão financeira pessoal. Permite o registro ágil de entradas e saídas, oferecendo ao usuário um acompanhamento dinâmico e visual do seu balanço patrimonial."
  },
  {
    "name":"Restaurante",
    "icon":"fa-solid fa-burger",
    "href": "https://github.com/Pedro-Rocha-Araujo/restaurante",
    "src":`${basePath}/projetos/projeto-restaurante.png`,
    "alt":"Link para o projeto restaurante",
    "stack": "React, Node, Express, MongoDB",
    "descricao": "Sistema Web Full-stack criado para agilizar a operação de restaurantes. O projeto gira em torno principalmente do gerenciamento de cardápios e pedidos por meio de uma interface intuitiva e responsiva, priorizando a facilidade e agilidade no atendimento."
  },
  {
    "name":"Tech-Fix",
    "icon":"fa-solid fa-briefcase",
    "href": "https://github.com/Pedro-Rocha-Araujo/techfix-landing-page",
    "src":`${basePath}/projetos/landing-page-tech-fix.png`,
    "alt":"Link para acessar o projeto de landing page desenvolvido para a empresa Tech-fix.",
    "stack": "Figma, Next",
    "descricao": "Landing page desenvolvida para a empresa Tech-fix. Inicialmente, o projeto teve um protótipo criado no Figma com foco em conversão e responsividade. A página foi estruturada para apresentar os serviços da empresa de forma clara e atrair clientes."
  }
]