const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

// Controllers
const {
  getSeatsController,
  updateSeatController,
} = require('../controllers/seatsController');

/* GET seats listing. */
// router.get('/all', (req, res, next) => {
//   res.status(200).send("all seats")
// })

// GET all seats listing
router.get('/', getSeatsController)


// Update seat
router.put(
    '/:seatId',
    [
        check('seatId', 'Seat Not Found').isMongoId(),
        check('isBooked', 'isBooked value is required')
            .optional()
            .notEmpty(),
    ],
    updateSeatController
    )

module.exports = router;
