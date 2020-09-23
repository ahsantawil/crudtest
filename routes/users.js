const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET Users listing
router.get('/', async function (req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (error) {
    res.json({
      'status': 'ERROR',
      'messages': error.messages,
      'data': {}
    })
  }
});

// POST Users
router.post('/', async function (req, res, next) {
  try {
    const {
      name,
      email,
      gender,
      phoneNumber
    } = req.body;
    const users = await model.users.create({
      name,
      email,
      gender,
      phone_number: phoneNumber
    });
    if (users) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'User berhasil ditambahkan',
        'data': users,
      })
    }
  } catch (error) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': error.messages,
      'data': {},
    })
  }
});

// Update users
router.patch('/:id', async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const {
      name,
      email,
      gender,
      phoneNumber
    } = req.body;
    const users = await model.users.update({
      name,
      email,
      gender,
      phone_number: phoneNumber
    }, {
      where: {
        id: usersId
      }
    });
    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User Berhasil diupdate',
        'data': users,
      })
    }
  } catch (error) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': error.messages,
      'data': {},
    })
  }
});

// DELETE Users
router.delete('/:id', async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const users = await model.Todo.destroy({
      where: {
        id: usersId
      }
    })
    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil dihapus',
        'data': users,
      })
    }
  } catch (error) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': error.messages,
      'data': {},
    })
  }
});

module.exports = router;