import API from '../http/axios.js';

export const CharactersService = {
	list: async function (ts, publicKey, hash, offset = 0) {
		return await API.get(
			`/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}`
		);
	},
	getComicsByCharacter: async function (collectionURI, payload) {
		return await API.get(
			`${collectionURI}?ts=${payload.ts}&apikey=${payload.publicKey}&hash=${payload.hash}`
		);
	},
};
