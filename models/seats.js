const mongoose = require('mongoose');

const seatsSchema = new mongoose.Schema(
    {
        seat: {
            type: Number,
            required: [true, 'Seat is required'],
        },
        isBooked: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Seat = mongoose.model('Seat', seatsSchema)

module.exports = Seat;