import React, { useState, useEffect } from "react";
// import semantic from 'semantic-ui';

import "../../styles/index.css";
// import Navbar from '../component/navbar.js';
// import { BrowswerRouter as Router, Switch, Route } from 'react-router-dom';

export const Home = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	//track when we're fetching data from API
	const [loading, setLoading] = useState(true);
	//called 1 time when mounts to DOM
	useEffect (() => {
		async function fetchPeople() {
			let res = await fetch('https://swapi.tech/api/people/');
			//return promise
			let data= await res.json();
			setPeople(data.results);
		}
		async function fetchPlanets() {
			let res = await fetch('https://swapi.tech/api/planets/');
			let data = await res.json();
			setPlanets(data.results);
		}
		
		async function fetchVehicles() {
			let res = await fetch('https://swapi.tech/api/vehicles/');
			let data = await res.json();
			setVehicles(data.results);
		}

		fetchPeople();
		fetchPlanets();
		fetchVehicles();
	}, []);

	console.log('data', people);
	console.log('data', planets);
	console.log('data', vehicles);

	return (
		<p>hello</p>
	);
}
