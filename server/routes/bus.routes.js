const { Router } = require('express');
const router = Router();
const bus = require('../controllers/bus.controller')

router.get('/:id', async function(req, res, next) {
  const done = await bus.get(req.params.id);
  return res.json(done);  
});

router.get('/', async function(req, res, next) {
  const done = await bus.getAll();
  return res.json(done);
});

router.post('/', async function(req, res, next) {
  const done = await bus.create(req.body);
  return res.json(done);
});

router.put('/:id', async function(req, res, next) {
  const data = {
    id: req.params.id,
    name: req.body.name,
    lastname: req.body.lastname,
    updated_at: Date.now()
  }
  const done = await bus.edit(data);
  return res.json(done);  
});

router.delete('/:id', async function(req, res, next) {
  const done = await bus.delete(req.params.id);
  return res.json(done);
});

module.exports = router;
