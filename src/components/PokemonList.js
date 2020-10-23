import React, { useState, useEffect } from "react";
import axios from "axios";

import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";
import { Container, Row } from "react-bootstrap";

const PokemonList = () => {
	const api = "https://pokeapi.co/api/v2/pokemon/";
	const [pokemonList, setPokemonList] = useState([]);
	const [currentPage, setCurrentPage] = useState(api);
	const [nextPage, setNextPage] = useState();
	const [prevPage, setPrevPage] = useState();
	const [loading, setLoading] = useState(true);
	const [pokemonDescription, setPokemonDescription] = useState([]);

	useEffect(() => {
		setLoading(true);
		const fetchPokemon = async () => {
			let cancel;
			let axiosToken = await axios.get(currentPage, {
				cancelToken: new axios.CancelToken((token) => (cancel = token)),
			});
			setLoading(false);
			setNextPage(axiosToken.data.next);
			setPrevPage(axiosToken.data.previous);
			setPokemonDescription([]);
			setPokemonList(
				axiosToken.data.results.map((pokemon) => ({
					name: pokemon.name,
					url: pokemon.url,
				}))
			);
			return () => cancel();
		};
		fetchPokemon();
	}, [currentPage]);

	const URL = "https://pokeapi.co/api/v2/pokemon-species";
	useEffect(() => {
		pokemonList.forEach((p) => {
			const fetchDescription = async () => {
				let cancel;
				let axiosToken = await axios.get(`${URL}/${p.name}`, {
					cancelToken: new axios.CancelToken((token) => (cancel = token)),
				});
				const description = axiosToken.data.flavor_text_entries[6].flavor_text;
				setPokemonDescription((prevDescription) => {
					const name = p.name;
					return [...prevDescription, [name, description]];
				});
				return () => cancel();
			};
			fetchDescription();
		});
	}, [pokemonList]);

	const handleNextPage = () => setCurrentPage(nextPage);
	const handlePrevPage = () => setCurrentPage(prevPage);

	if (loading)
		return (
			<Container>
				<h1>Loading...</h1>
			</Container>
		);

	return (
		<>
			<Pagination
				handleNextPage={nextPage ? handleNextPage : null}
				handlePrevPage={prevPage ? handlePrevPage : null}
			/>
			<Row xs lg={5} style={{ display: "flex", flexWrap: "wrap" }}>
				{pokemonDescription &&
					pokemonDescription.map((p, index) => (
						<PokemonCard key={index} p={p} />
					))}
			</Row>
			<Pagination
				handleNextPage={nextPage ? handleNextPage : null}
				handlePrevPage={prevPage ? handlePrevPage : null}
			/>
		</>
	);
};

export default PokemonList;
