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
			<Router>
				<Switch>
					<Route path='/react_pokedex' exact component={PokemonList} />
					<Route path='/react_pokedex/:name' component={PokemonDetails} />
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
