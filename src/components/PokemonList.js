import React from "react";

import PokemonCard from "./PokemonCard";
import { Row } from "react-bootstrap";

const PokemonList = ({ pokemonDescription }) => {
	return (
		<Row xs lg={5} style={{ display: "flex", flexWrap: "wrap" }}>
			{pokemonDescription &&
				pokemonDescription.map((p, index) => <PokemonCard key={index} p={p} />)}
		</Row>
	);
};

export default PokemonList;
