const { Router } = require('express');
const router = Router();
const driver = require('../controllers/driver.controller')

router.get('/:id', async function(req, res, next) {
  const done = await driver.get(req.params.id);
  return res.json(done);  
});

router.get('/', async function(req, res, next) {
  const done = await driver.getAll();
  return res.json(done);
});

router.post('/', async function(req, res, next) {
  const done = await driver.create(req.body);
  return res.json(done);
});

router.put('/:id', async function(req, res, next) {
  const data = {
    id: req.params.id,
    name: req.body.name,
    lastname: req.body.lastname,
    updated_at: Date.now()
  }
  const done = await driver.edit(data);
  return res.json(done);  
});

router.delete('/:id', async function(req, res, next) {
  const done = await driver.delete(req.params.id);
  return res.json(done);
});

module.exports = router;