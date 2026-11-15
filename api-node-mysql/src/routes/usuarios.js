const express = require('express');
const db = require('../config/db');

const router = express.Router();

// GET /usuarios - lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const [usuarios] = await db.execute(
      'SELECT id, nome, email, idade, criado_em FROM usuarios ORDER BY id'
    );
    return res.status(200).json(usuarios);
  } catch (erro) {
    console.error('Erro ao listar usuários:', erro.message);
    return res.status(500).json({ erro: 'Erro interno ao buscar usuários.' });
  }
});

// POST /usuarios - cadastra um usuário
router.post('/', async (req, res) => {
  try {
    const { nome, email, idade } = req.body;

    if (!nome || !email || typeof nome !== 'string' || typeof email !== 'string') {
      return res.status(400).json({ erro: 'Informe nome e email válidos.' });
    }

    if (idade !== undefined && idade !== null &&
        (!Number.isInteger(Number(idade)) || Number(idade) < 0)) {
      return res.status(400).json({ erro: 'A idade deve ser um número inteiro igual ou maior que zero.' });
    }

    const [resultado] = await db.execute(
      'INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)',
      [nome.trim(), email.trim(), idade ?? null]
    );

    const [novoUsuario] = await db.execute(
      'SELECT id, nome, email, idade, criado_em FROM usuarios WHERE id = ?',
      [resultado.insertId]
    );

    return res.status(201).json(novoUsuario[0]);
  } catch (erro) {
    if (erro.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ erro: 'Já existe um usuário com esse email.' });
    }
    console.error('Erro ao cadastrar usuário:', erro.message);
    return res.status(500).json({ erro: 'Erro interno ao cadastrar usuário.' });
  }
});

// PUT /usuarios/:id - atualiza um usuário
router.put('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { nome, email, idade } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }
    if (!nome || !email || typeof nome !== 'string' || typeof email !== 'string') {
      return res.status(400).json({ erro: 'Informe nome e email válidos.' });
    }
    if (idade !== undefined && idade !== null &&
        (!Number.isInteger(Number(idade)) || Number(idade) < 0)) {
      return res.status(400).json({ erro: 'A idade deve ser um número inteiro igual ou maior que zero.' });
    }

    const [resultado] = await db.execute(
      'UPDATE usuarios SET nome = ?, email = ?, idade = ? WHERE id = ?',
      [nome.trim(), email.trim(), idade ?? null, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    const [atualizado] = await db.execute(
      'SELECT id, nome, email, idade, criado_em FROM usuarios WHERE id = ?',
      [id]
    );
    return res.status(200).json(atualizado[0]);
  } catch (erro) {
    if (erro.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ erro: 'Já existe outro usuário com esse email.' });
    }
    console.error('Erro ao atualizar usuário:', erro.message);
    return res.status(500).json({ erro: 'Erro interno ao atualizar usuário.' });
  }
});

// DELETE /usuarios/:id - exclui um usuário
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    const [resultado] = await db.execute(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ mensagem: 'Usuário excluído com sucesso.' });
  } catch (erro) {
    console.error('Erro ao excluir usuário:', erro.message);
    return res.status(500).json({ erro: 'Erro interno ao excluir usuário.' });
  }
});

module.exports = router;
