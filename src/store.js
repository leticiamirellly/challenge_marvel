import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './features/user-slice.js';
import { charactersReducer } from './features/characters-slice.js';

export const store = configureStore({
	reducer: {
		user: userReducer,
		characters: charactersReducer,
	},
});
