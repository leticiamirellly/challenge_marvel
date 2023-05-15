import React, { useEffect, useState } from 'react';
import { Container, Wrapper, Error } from './../styles/views/Authentication.js';
import md5 from 'md5';
import { CharactersService } from '../services/characters.js';
import { Loader } from '../styles/components/Loading.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Authentication() {
	const [privateKey, setPrivateKey] = useState('');
	const [publicKey, setPublicKey] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		setError(false);
		setLoading(true);

		if (privateKey && publicKey) {
			const ts = new Date().getTime();
			const concatStrings = `${ts}${privateKey}${publicKey}`;
			const hash = md5(concatStrings);

			try {
				const response = await CharactersService.list(ts, publicKey, hash);
				dispatch({
					type: 'user/authenticate',
					payload: { status: true, keys: { privateKey, publicKey } },
				});
				dispatch({ type: 'characters/set', payload: response.data.data });
				navigate('/characters');
			} catch (error) {
				setError(
					error.response?.data.message ||
						'Erro ao solicitar, tente novamente em alguns minutos'
				);
			}
			setLoading(false);
		} else {
			setError('Preencha todos os campos.');
		}
	};

	return (
		<Wrapper>
			<Container>
				<h1>Dados de acesso</h1>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="private_key"
						onChange={(e) => {
							setPrivateKey(e.target.value);
						}}
						required
					/>
					<input
						type="text"
						placeholder="public_key"
						onChange={(e) => {
							setPublicKey(e.target.value);
						}}
						required
					/>
					{error && <Error>{error}</Error>}
					<button type="submit" disabled={!privateKey || !publicKey}>
						{isLoading ? <Loader /> : 'Acessar'}
					</button>
				</form>
			</Container>
		</Wrapper>
	);
}

export default Authentication;
