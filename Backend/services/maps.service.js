const axios = require('axios');

module.exports.getAddressCoordinate = async (adress) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${(adress)}&language=en&region=en&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination) throw new Error('Missing origin or destination');

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.gomaps.pro/maps/api/directions/json?destination=${destination}&origin=${origin}&key=${apiKey}`;

    try {    
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const route = response.data.routes[0];
            const leg = route.legs[0]; 

            return {
                distance: leg.distance.text, 
                duration: leg.duration.text 
            };
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) =>{
    if(!input){
        throw new Error('Query is Required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${input}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            return response.data.predictions;
        }
        else{
            throw new Error('Unable to fetch suggestions');
        }
    }catch(error){
        throw error
    }


    
}