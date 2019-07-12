import Geocode from "react-geocode";
const apiKey = 'AIzaSyCMdC6o0UQFxzNCamBwPLWsV1E-Ipo77iA'
Geocode.setApiKey(apiKey);

function getAddressByCoordinates (lat, lng, callback) {
  Geocode.fromLatLng(lat, lng).then(
    response => {
      const address = response.results[0].formatted_address;
      callback(address)
    },
    error => {
      console.error(error);
    }
  );
}

export default {
  getAddressByCoordinates
}
