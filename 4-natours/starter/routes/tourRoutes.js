const express = require('express');
const {
  checkID,
  checkBody,
  getAllTours,
  createTours,
  getTour,
  updateTour,
  deleteTour,
} = require(`${__dirname}/../controllers/toursController.js`);
const router = express.Router();

router.param(`id`, checkID);

router.route('/').get(getAllTours).post(checkBody, createTours);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
