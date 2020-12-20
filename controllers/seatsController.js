const { validationResult } = require("express-validator");

//Models
const Seat = require("../models/seats");

module.exports.getSeatsController = async (req, res, next) => {
  console.log(req.user);

  // Getting Seats from server
  try {
    const seats = await Seat.find();
    res.send(seats);
  } catch (err) {
    next(err);
  }
};

module.exports.updateSeatController = async (req, res, next) => {
  const id = req.params.seatId;
  const seatInputValue = req.body;

  // validation update operation and inputData
  const keysInput = Object.keys(seatInputValue);
  const allowedForUpdates = ["isBooked"];

  // Check if any extra invalid field out of allowedForUpdates is requested or not
  const isAllowed = keysInput.every((update) =>
    allowedForUpdates.includes(update)
  );
  if (!isAllowed) return res.status(400).send("Invalid Update Operation.");

  // Dealing with errors on express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(404).send(errors.array());

  // After passing all errors and validations, executes try/catch
  // Update seat from server
  try {
    const seat = await Seat.findOneAndUpdate(
      {
        _id: id,
      },
      seatInputValue,
      {
        // For adding new seat to be updated
        new: true,
        // Active validating rules from Schema model when updating
        // runValidators: ture,
        // context: 'query'
      }
    );
    if (!seat) return res.status(404).send("Seat Not Found");
    res.send(seat);
  } catch (err) {
    next(err);
  }

};
