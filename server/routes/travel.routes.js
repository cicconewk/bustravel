const { Router } = require('express');
const router = Router();
const travel = require('../controllers/travel.controller')

router.get('/:id', async function(req, res, next) {
  const done = await travel.get(req.params.id);
  return res.json(done);  
});

router.get('/', async function(req, res, next) {
  const done = await travel.getAll();
  return res.json(done);
});

router.get('/average', async function(req, res, next) {
  const done = await travel.getRouteAverage();
  return res.json(done);
});

router.post('/', async function(req, res, next) {
  const done = await travel.create(req.body);
  return res.json(done);
});

router.put('/:id/:passanger', async function(req, res, next) {
  const done = await travel.registerPassenger(req.params.id, req.params.passanger);
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
  const done = await travel.edit(data);
  return res.json(done);  
});

router.delete('/:id', async function(req, res, next) {
  const done = await travel.delete(req.params.id);
  return res.json(done);
});

module.exports = router;