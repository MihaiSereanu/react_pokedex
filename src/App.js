import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";

import { Container } from "react-bootstrap";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/details/[PokemonDetails]";

const App = () => {
	return (
		<Container fluid className='pokemon-container'>
			<Router basename='/react_pokedex'>
				<Switch>
					<Route path='/' exact component={PokemonList} />
					<Route path='/:name' component={PokemonDetails} />
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
