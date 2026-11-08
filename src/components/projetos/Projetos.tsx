import "./projetos.css"
import { projetos } from "@/projetos"

export default function Projetos() {
  return (
    <section className="projetos">
			<h2><i className="fa-solid fa-rocket"></i> Projetos</h2>
			<div className="projetos">
				{projetos.map((projeto)=> {
					return (
						<div className="projeto">
							<h3><i className={projeto.icon}></i> Clínica</h3>
							<a target="_blank" href={projeto.href}>                        
								<img 
									src={projeto.src} 
									alt={projeto.alt}
								/>
							</a>
						</div>
					)
				})}
			</div>
    </section>
  )
}