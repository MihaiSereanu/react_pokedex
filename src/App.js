import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import Pagination from "./components/Pagination";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import { Container } from "react-bootstrap";

const api = "https://pokeapi.co/api/v2/pokemon/";

function App() {
	const [pokemon, setPokemon] = useState([]);
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
			console.log(axiosToken.data);
			setNextPage(axiosToken.data.next);
			setPrevPage(axiosToken.data.previous);
			setPokemonDescription([]);
			setPokemon(
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
		pokemon.map((p) => {
			const fetchDescription = async () => {
				let cancel;
				let axiosToken = await axios.get(`${URL}/${p.name}`, {
					cancelToken: new axios.CancelToken((token) => (cancel = token)),
				});
				// console.log(axiosToken.data);
				const description = axiosToken.data.flavor_text_entries[6].flavor_text;
				setPokemonDescription((prevDescription) => {
					const name = p.name;
					return [...prevDescription, [name, description]];
				});
				return () => cancel();
			};
			fetchDescription();
		});
	}, [pokemon]);

	const handleNextPage = () => setCurrentPage(nextPage);
	const handlePrevPage = () => setCurrentPage(prevPage);

	if (loading) return "Loading...";

	return (
		<>
			<Container fluid className='pokemon-container'>
				<Pagination
					handleNextPage={nextPage ? handleNextPage : null}
					handlePrevPage={prevPage ? handlePrevPage : null}
				/>
				<PokemonList pokemonDescription={pokemonDescription} />
			</Container>
			<Pagination
				handleNextPage={nextPage ? handleNextPage : null}
				handlePrevPage={prevPage ? handlePrevPage : null}
			/>
		</>
	);
}

export default App;
