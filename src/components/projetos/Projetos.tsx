'use client'

import { useState } from "react"
import "./projetos.css"
import { ProjetoInterface, projetos } from "@/projetos"
import CardProjeto from "../card-projeto/CardProjeto"

export default function Projetos() {
	const [card, setCard] = useState<ProjetoInterface | null>(null)

  return (
    <section className="projetos">
			{ card && (
				<CardProjeto 
					projeto={card}
					fecharCard={()=>setCard(null)}
				/>
			) }
			<h2><i className="fa-solid fa-rocket"></i> Projetos</h2>
			<div className="projetos">
				{projetos.map((projeto)=> {
					return (
						<div onClick={()=>setCard(projeto)} key={projeto.name} className="projeto">
							<h3><i className={projeto.icon}></i> {projeto.name}</h3>                      
								<img 
									src={projeto.src} 
									alt={projeto.alt}
								/>
						</div>
					)
				})}
			</div>
    </section>
  )
}