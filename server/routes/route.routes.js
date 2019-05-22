const { Router } = require('express');
const router = Router();
const route = require('../controllers/route.controller')

router.get('/:id', async function(req, res, next) {
  const done = await route.get(req.params.id);
  return res.json(done);  
});

router.get('/', async function(req, res, next) {
  const done = await route.getAll();
  return res.json(done);
});

router.post('/', async function(req, res, next) {
  const done = await route.create(req.body);
  return res.json(done);
});

router.put('/:id', async function(req, res, next) {
  const data = {
    id: req.params.id,
    departure: req.body.departure,
    destination: req.body.destination,
    distance: req.body.distance,
    buses: req.body.buses,
    updated_at: Date.now()
  }
  const done = await route.edit(data);
  return res.json(done);  
});

router.delete('/:id', async function(req, res, next) {
  const done = await route.delete(req.params.id);
  return res.json(done);
});

module.exports = router;