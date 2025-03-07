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
    if(!pickup || !destination) throw new Error('Missing pickup or destination');

const distanceTime = await mapService.getDistanceTime(pickup, destination);

// Convert distance to number
let distanceInKm = parseInt(distanceTime.distance, 10);

// Convert duration to total minutes
const durationParts = distanceTime.duration.match(/(\d+)\s*hours?|\d+\s*mins?/g);
let totalMinutes = 0;
console.log(durationParts);

if (durationParts) {
    durationParts.forEach(part => {
        if (part.includes("hour")) {
            totalMinutes += parseInt(part, 10) * 60;
        } else if (part.includes("min")) {
            totalMinutes += parseInt(part, 10);
        }
    });
}


    const baseFare = {
        auto: 10,
        car: 10,
        moto:5
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 6
    };

    const perMinuteRate = {
        auto: 1,
        car: 1.5,
        moto: 0.5
    };

    const fare = {
        auto: baseFare.auto + (distanceInKm * perKmRate.auto) + (totalMinutes * perMinuteRate.auto),
        car: baseFare.car + (distanceInKm * perKmRate.car) + (distanceInKm * perMinuteRate.car),
        moto: baseFare.moto + (distanceInKm * perKmRate.moto) + (distanceInKm * perMinuteRate.moto)
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
