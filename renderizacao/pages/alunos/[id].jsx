export async function getStaticPaths() {
    const resp = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resp.json()

    const paths = ids.map(id => {
        return { params: { id: String(id) } }
    })

    return {
        fallback: true, //false retorna 404 se id não tiver na lista; 
        paths
    }
}

export async function getStaticProps({ params }) {
    const resp = await fetch('http://localhost:3000/api/alunos/' + params.id)
    const aluno = await resp.json()


    console.log(aluno)
    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId({ aluno }) {
    return (
        <div>
            <h1>Detalhes do aluno</h1>
            {aluno ? <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul> : false}

        </div>
    )
}