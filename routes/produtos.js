const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Lista de Produtos'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere um produto'
    })
});

//usando parametro

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Usando o GET de um produto exclusivo ESPECIAL',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        })
    }
})

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o Patch dentro da rota de produtos'
    })
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o Delete dentro da rota de produtos'
    })
});

module.exports = router;