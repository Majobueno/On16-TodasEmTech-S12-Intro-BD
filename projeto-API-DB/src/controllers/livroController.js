const livros = require ("../models/livros");
const fs = require ("fs");

const getAllLivros = (req, res) => {
  livros.find((err, livros) => {
    res.status(200).send(livros);
  });
}


const getLivros =  (req, res) => {
  const id = req.params.id;
  livros.findById(id, (err, livros) => {
if(err){
  res.status(400).send({message: `${err.message} - id do livro não encontrado`});
} else {
  res.status(200).send(livros)
}
  })

};

const createLivros =  (req, res) => {
    const id = req.params.id;

  livro.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
    } else {
      res.status(201).send(livro.toJSON())
    }
  })
};


const updateLivros =  (req, res) => {
  const id = req.params.id;

  livros.findByIdUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message:'Livro atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};


const deleteLivros =  (req, res) => {
  const id = req.params.id;

  livros.findByIdDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Livro deletado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};



function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}


module.exports = {
    getAllLivros,
    getLivros, 
    createLivros,
    updateLivros,
    deleteLivros
}