import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Container,
	Header,
	ButtonBack,
	ComicsSection,
} from './../styles/views/Character.js';
import Comic from './../components/Comic.jsx';
import { CharactersService } from '../services/characters.js';
import { useSelector } from 'react-redux';
import useApiComposer from './../hooks/useApiComposer.js';

function Character() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [comics, setComics] = useState([]);
	const userData = useSelector((state) => state.user);

	useEffect(() => {
		async function fetchComics() {
			let response = await CharactersService.getComicsByCharacter(
				state.character.comics.collectionURI,
				useApiComposer(userData)
			);
			setComics(response.data?.data.results);
		}
		fetchComics();
	}, []);

	return (
		<Container>
			<Header>
				<img
					src={`${state.character.thumbnail.path}.${state.character.thumbnail.extension}`}
					alt="thumbnail"
				/>
				<section>
					<h1>{state.character.name}</h1>
					<p>{state.character.description || 'Not description'}</p>
					<ButtonBack onClick={() => navigate('/characters')}>
						Voltar
					</ButtonBack>
				</section>
			</Header>
			<ComicsSection>
				<h2>Fascículos</h2>
				<Comic items={comics} />
			</ComicsSection>
		</Container>
	);
}

export default Character;
