import React from "react";

import styles from "../styles/PokemonCard.module.css";
import { Card, Button, CardGroup } from "react-bootstrap";

const PokemonCard = ({ p }) => {
	const handleRedirect = (link) => {
		// redirect to pokemon page based on name
		// https://pokeapi.co/api/v2/pokemon/pidgeot
	};

	return (
		<CardGroup className={styles.cardContainer}>
			<Card className={styles.pokemonCard}>
				<Card.Body className={styles.cardBody}>
					<Card.Title>
						{p[0].charAt(0).toUpperCase() + p[0].substr(1).toLowerCase()}
					</Card.Title>
					<Card.Text>{`${p[1].split(".")[0]}.`}</Card.Text>
					<Button
						variant='dark'
						className={styles.transferBtn}
						styles={{ backgroundColor: "#833921" }}
						onClick={() => handleRedirect()}>
						See Details
					</Button>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};

export default PokemonCard;
