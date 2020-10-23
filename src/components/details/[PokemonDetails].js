import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/PokemonDetails.module.css";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

const PokemonDetails = ({ match }) => {
	const [pokemon, setPokemon] = useState({});
	const [pokemonStats, setPokemonStats] = useState({});

	const link = `https:pokeapi.co/api/v2/pokemon-species/${match.params.name}`;
	const statsLink = `https:pokeapi.co/api/v2/pokemon/${match.params.name}`;

	useEffect(() => {
		const fetchPokemon = async () => {
			let cancel;
			const details = await axios.get(link, {
				cancelToken: new axios.CancelToken((token) => (cancel = token)),
			});
			const info = await details.data;
			console.log(info);
			setPokemon(info);
			return () => cancel();
		};
		fetchPokemon();
	}, [link]);

	useEffect(() => {
		const fetchStats = async () => {
			let cancel;
			const stats = await axios.get(statsLink, {
				cancelToken: new axios.CancelToken((token) => (cancel = token)),
			});
			const detailedStats = await stats.data;
			setPokemonStats(detailedStats);
			return () => cancel();
		};
		fetchStats();
	}, [statsLink]);

	return Object.keys(pokemon).length > 0 &&
		Object.keys(pokemonStats).length > 0 ? (
		<Container fluid className={styles.mainDescription}>
			<Row>
				<Col lg={true} className={styles.columnOne}>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
						alt='Pokemon'
						fluid
					/>
					<Container fluid className={styles.description}>
						{pokemon.flavor_text_entries[0].flavor_text.replace(
							/[^a-zA-Z0-9 . ]/g,
							" "
						)}
						{pokemon.flavor_text_entries[2].flavor_text.replace(
							/[^a-zA-Z0-9 . ]/g,
							" "
						)}
						{pokemon.flavor_text_entries[3].flavor_text.replace(
							/[^a-zA-Z0-9 . ]/g,
							" "
						)}
						{pokemon.flavor_text_entries[4].flavor_text.replace(
							/[^a-zA-Z0-9 . ]/g,
							" "
						)}
					</Container>

					<Container fluid className={styles.extraDescription}>
						<ListGroup>
							<ListGroup.Item variant='dark' className={styles.listItem}>
								This pokemon prefers living in{" "}
								<strong>{pokemon.habitat.name}</strong> environments.
							</ListGroup.Item>
							{pokemon.evolves_from_species && (
								<ListGroup.Item variant='dark' className={styles.listItem}>
									Evolves from{" "}
									<strong className={styles.baseForm}>
										{pokemon.evolves_from_species.name}
									</strong>
								</ListGroup.Item>
							)}
						</ListGroup>
					</Container>
				</Col>
				<Col lg={true} className={styles.columnTwo}>
					<h1 className={styles.wideTag}>{pokemon.name}</h1>
					<Container fluid className={styles.baseStats}>
						<h2 className={styles.tag}>Base Statistics</h2>
						{pokemonStats.stats.map((stat, index) => {
							return (
								<div key={index} className={styles.smallTag}>
									{stat.stat.name}: {stat.base_stat}
								</div>
							);
						})}
					</Container>

					<Container fluid className={styles.baseMoves}>
						<h2 className={styles.tag}>Basic Moves</h2>
						<ListGroup>
							<ListGroup.Item variant='dark' className={styles.pokemonMoves}>
								{pokemonStats.moves[0].move.name}
							</ListGroup.Item>
							<ListGroup.Item variant='dark' className={styles.pokemonMoves}>
								{pokemonStats.moves[1].move.name}
							</ListGroup.Item>
							<ListGroup.Item variant='dark' className={styles.pokemonMoves}>
								{pokemonStats.moves[2].move.name}
							</ListGroup.Item>
							<ListGroup.Item variant='dark' className={styles.pokemonMoves}>
								{pokemonStats.moves[3].move.name}
							</ListGroup.Item>
						</ListGroup>
					</Container>
				</Col>
			</Row>
		</Container>
	) : (
		<Container>
			<h1>Loading...</h1>
		</Container>
	);
};

export default PokemonDetails;
