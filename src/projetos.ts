import { basePath } from "./baseUrl"

export interface ProjetoInterface {
  name: string,
  icon: string,
  href: string,
  src: string,
  alt: string
}

export const projetos = [
  {
    "name":"Clínica",
    "icon":"fa-solid fa-stethoscope",
    "href": "https://github.com/Pedro-Rocha-Araujo/dashboard-clinica",
    "src": `${basePath}/projetos/projeto-clinica.png`,
    "alt":"Link para o projeto Dasboard Clínica"
  },
  {
    "name":"Barbearia",
    "icon":"fa-solid fa-scissors",
    "href": "https://github.com/Pedro-Rocha-Araujo/barber-manager",
    "src":`${basePath}/projetos/projeto-barber.png`,
    "alt":"Link para o projeto barbearia desenvolvido em MongoDb"
  },
  {
    "name":"Imobiliária",
    "icon":"fa-solid fa-house",
    "href": "https://github.com/Pedro-Rocha-Araujo/venda-de-imoveis",
    "src":`${basePath}/projetos/projeto-imobiliaria.png`,
    "alt":"Imagem do projeto Desenvolvido para imobiliária, feito em React, Node e MongoDb"
  },
  {
    "name":"Finanças",
    "icon":"fa-solid fa-calculator",
    "href": "https://github.com/Pedro-Rocha-Araujo/projeto-financas",
    "src":`${basePath}/projetos/projeto-financas.png`,
    "alt":"Link para o projeto finanças"
  },
  {
    "name":"Restaurante",
    "icon":"fa-solid fa-burger",
    "href": "https://github.com/Pedro-Rocha-Araujo/restaurante",
    "src":`${basePath}/projetos/projeto-restaurante.png`,
    "alt":"Link para o projeto restaurante"
  },
  {
    "name":"Tech-Fix",
    "icon":"fa-solid fa-briefcase",
    "href": "https://github.com/Pedro-Rocha-Araujo/techfix-landing-page",
    "src":`${basePath}/projetos/landing-page-tech-fix.png`,
    "alt":"Link para acessar o projeto de landing page desenvolvido para a empresa Tech-fix."
  }
]