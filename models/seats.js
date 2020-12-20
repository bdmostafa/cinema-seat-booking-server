const mongoose = require('mongoose');

const seatsSchema = new mongoose.Schema(
    {
        seat: {
            type: Number,
            required: [true, 'Seat is required'],
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model('Seat', seatsSchema)

module.exports = Note;