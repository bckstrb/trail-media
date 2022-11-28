import axios from "axios";

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// const trailSearch = (lat, lon) => {
//   const options = {
//     method: "GET",
//     url: "https://trailapi-trailapi.p.rapidapi.com/trails/explore/",
//     params: { lat: lat, lon: lon },
//     headers: {
//       "X-RapidAPI-Key": "0fa6ad6c03msh367b9d3b4228be3p1b8388jsnb44ad1ec5d1f",
//       "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
//     },
//   };
//   console.log(options);
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data
      
      
      
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
    
// };
const trailSearch = (lat, lon) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0fa6ad6c03msh367b9d3b4228be3p1b8388jsnb44ad1ec5d1f',
		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
	}
};

return fetch(`https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${lat}&lon=${lon}`, options)

	.then(response => response.json())
  .then(response => response.data)
	.catch(err => console.error(err));
};

// const trailSearch = (city) => {
// const options = {
//   method: 'GET',
//   url: 'https://trailapi-trailapi.p.rapidapi.com/activity/',
//   params: {
//     lat: '34.1',
//     limit: '25',
//     lon: '-105.2',
//     'q-city_cont': 'provo',
//     'q-country_cont': 'United States',
//     'q-state_cont': 'utah',
//     radius: '25',
//     'q-activities_activity_type_name_eq': 'hiking'
//   },
//   headers: {
//     'X-RapidAPI-Key': '0fa6ad6c03msh367b9d3b4228be3p1b8388jsnb44ad1ec5d1f',
//     'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
//   }
// };
// console.log(options);

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// };

export default trailSearch;
