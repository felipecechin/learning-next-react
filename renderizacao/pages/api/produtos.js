// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        {id: 1, nome: 'Caneta', preco: 44.5},
        {id: 2, nome: 'Cama', preco: 24.5},
    ])
  }
  