import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		set: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { set } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
