const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    hotel: { type: String, required: true },
    car: { type: String, required: true },
    sightseeing: { type: String, required: true },
    food: { type: String, required: true },
    destination: { type: String, required: true },
    from_date: { type: Date, required: true },
    to_date: { type: Date, required: true },
    no_of_passenger: { type: Number, required: true },
    travel_tickects: { type: Boolean, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    transportation:{ type: String, required: true },
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    },
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    updated_by: { type: Schema.Types.ObjectId, ref: 'Users'},
})

const Booking = mongoose.model('Booking', bookingSchema);
module.exports =Booking ;

