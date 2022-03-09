import {useState, useEffect} from 'react'

export default function Questao() {
	const [questao, setQuestao] = useState(null)

	useEffect(() => {
		fetch('http://localhost:3000/api/questao/123').then(resp=> resp.json()).then(setQuestao)
	}, [])


	function renderizarRespostas() {
		if (questao) {
			return questao.respostas.map((resp, index) => {
				return <li key={index}>{resp}</li>
			})
		}
	}

	return (
		<div>
			<h1>Questão</h1>
			<div>
				<span>{questao?.id} - {questao?.enunciado}
					<ul>
						{renderizarRespostas()}
					</ul>
				</span>
			</div>
		</div>
	)
}