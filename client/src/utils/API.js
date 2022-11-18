import axios from "axios";

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const trailSearch = (lat, lon) => {
  const options = {
    method: "GET",
    url: "https://trailapi-trailapi.p.rapidapi.com/trails/explore/",
    params: { lat: lat, lon: lon },
    headers: {
      "X-RapidAPI-Key": "0fa6ad6c03msh367b9d3b4228be3p1b8388jsnb44ad1ec5d1f",
      "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
    },
  };
  console.log(options);
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default trailSearch;
