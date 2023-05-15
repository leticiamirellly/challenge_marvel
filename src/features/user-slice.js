import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: false,
	keys: { publicKey: '', privateKey: '' },
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authenticate: (state, action) => {
			state.status = action.payload.status;
			state.keys.privateKey = action.payload.keys.privateKey;
			state.keys.publicKey = action.payload.keys.publicKey;
		},
	},
});

export const { authenticate } = userSlice.actions;
export const userReducer = userSlice.reducer;
