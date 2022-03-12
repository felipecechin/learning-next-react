// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 10000) {
    return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
    res.status(200).json([
        { id: numeroAleatorio(), nome: 'Caneta', preco: 44.5 },
        { id: numeroAleatorio(), nome: 'Cama', preco: 24.5 },
    ])
}
