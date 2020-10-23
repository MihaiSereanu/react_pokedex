import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/PokemonCard.module.css";
import { Card, Button, CardGroup } from "react-bootstrap";

const PokemonCard = ({ p }) => {
	return (
		<CardGroup className={styles.cardContainer}>
			<Card className={styles.pokemonCard}>
				<Card.Body className={styles.cardBody}>
					<Card.Title>
						{p[0].charAt(0).toUpperCase() + p[0].substr(1).toLowerCase()}
					</Card.Title>
					<Card.Text>{`${p[1].split(".")[0]}.`}</Card.Text>
					<Link to={`/details/${p[0]}`}>
						<Button
							variant='dark'
							className={styles.transferBtn}
							styles={{ backgroundColor: "#833921" }}>
							See Details
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};

export default PokemonCard;
