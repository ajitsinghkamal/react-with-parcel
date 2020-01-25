import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		contact: '',
	},
	reducers: {
		setContact(state, action) {
			state.contact = action.payload;
		},
	},
});
export const actions = authSlice.actions;
export default authSlice.reducer;
