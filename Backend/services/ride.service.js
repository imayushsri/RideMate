
const { body } = require('express-validator');
const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto = require('crypto');


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}
async function getFare(pickup, destination) {
    if (!pickup || !destination) throw new Error("Missing pickup or destination");

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    // Convert distance to number
    let distanceInKm = parseFloat(distanceTime.distance.replace(/[^\d.]/g, "")); // Remove commas & convert to float

    // Convert duration to total minutes
    let totalMinutes = 0;
    const daysMatch = distanceTime.duration.match(/(\d+)\s*day/);
    const hoursMatch = distanceTime.duration.match(/(\d+)\s*hour/);
    const minutesMatch = distanceTime.duration.match(/(\d+)\s*min/);

    if (daysMatch) totalMinutes += parseInt(daysMatch[1], 10) * 24 * 60; // Convert days to minutes
    if (hoursMatch) totalMinutes += parseInt(hoursMatch[1], 10) * 60; // Convert hours to minutes
    if (minutesMatch) totalMinutes += parseInt(minutesMatch[1], 10); // Add minutes

    const baseFare = { auto: 10, car: 10, moto: 5 };
    const perKmRate = { auto: 10, car: 15, moto: 6 };
    const perMinuteRate = { auto: 1, car: 1.5, moto: 0.5 };

    const fare = {
        auto: Math.round(baseFare.auto + (distanceInKm * perKmRate.auto) + (totalMinutes * perMinuteRate.auto)),
        car: Math.round(baseFare.car + (distanceInKm * perKmRate.car) + (totalMinutes * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + (distanceInKm * perKmRate.moto) + (totalMinutes * perMinuteRate.moto))
    };

    return fare;
}

module.exports.getFare = getFare;

module.exports.createRide = async ({
    userId, pickup, destination, vehicleType
}) => {
    if(!userId || !pickup || !destination || !vehicleType) throw new Error('All fields are required');
    const fare = await getFare(pickup, destination);
    const ride = await rideModel.create({
        userId,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[vehicleType]
    });
    return ride;
}
