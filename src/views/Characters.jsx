import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './../components/Table.jsx';
import { CharactersService } from '../services/characters.js';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';

function Characters() {
	const { keys } = useSelector((state) => state.user);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const rowsPerPage = 20;

	const navigate = useNavigate();

	const onSubmit = async (e) => {
		setError(false);
		setLoading(true);
		const ts = new Date().getTime();
		const concatStrings = `${ts}${keys.privateKey}${keys.publicKey}`;
		const hash = md5(concatStrings);
		try {
			const response = await CharactersService.list(
				ts,
				keys.publicKey,
				hash,
				(e - 1) * rowsPerPage
			);
			dispatch({ type: 'characters/set', payload: response.data.data });
		} catch (error) {
			setError(
				error.response?.data.message ||
					'Erro ao solicitar, tente novamente em alguns minutos'
			);
		}
		setLoading(false);
	};

	const characters = useSelector((state) => state.characters.data);
	const [page, setPage] = useState(1);

	const onChangePage = async (e) => {
		setPage(e);
		await onSubmit(e);
	};

	const onCharacterSelected = (character) => {
		navigate(`/characters/${character.id}`, {
			replace: true,
			state: {
				character,
			},
		});
	};

	return (
		<Table
			data={characters.results}
			rowsPerPage={rowsPerPage}
			total={characters.total}
			setPage={onChangePage}
			page={page}
			error={error}
			isLoading={isLoading}
			viewCharacter={onCharacterSelected}
		/>
	);
}
export default Characters;
