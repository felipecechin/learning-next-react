import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Buscar() {
	const router = useRouter()
	const codigo = router.query.codigo


	return (
		<div>
			<h1>Rotas &gt; {codigo} &gt; Buscar</h1>
			<ul>
				<Link href="/rotas" passHref>
					<li>
						Voltar
					</li>
				</Link>
			</ul>
		</div>
	)
}