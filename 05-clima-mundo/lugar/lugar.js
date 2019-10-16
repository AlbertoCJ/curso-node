const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encoderURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encoderURL }`,
        headers: { 'x-rapidapi-key': 'fb98cca8a1msh8307c1c082d7ae8p1c4b8fjsnb554741cacc3' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}