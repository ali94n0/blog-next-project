import http from "@/services/httpService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Router from "next/router";
import toast from "react-hot-toast";

// Async actions
export const signIn = createAsyncThunk(
	"auth/signIn",
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await http.post("/user/signin", credentials);
			toast.success(`خوش امدی ${response.data.name}`);
			Router.replace("/dashboard");
			return response.data;
		} catch (error) {
			toast.error(error.response?.data?.message);
			return rejectWithValue(error.response?.data);
		}
	},
);

export const signUp = createAsyncThunk(
	"auth/signUp",
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await http.post("/user/signup", credentials);
			toast.success("ثبتنام با موفقیت انجام شد");
			Router.push("/auth/signin");
			return response.data;
		} catch (error) {
			toast.error(error.response?.data?.message);
			return rejectWithValue(error.response?.data);
		}
	},
);

export const userAuth = createAsyncThunk(
	"auth/userAuth",
	async (_, { rejectWithValue }) => {
		try {
			const response = await http.get("/user/load");
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data);
		}
	},
);

export const signOut = createAsyncThunk(
	"auth/signOut",
	async (user, { rejectWithValue }) => {
		try {
			await http.get("/user/logout");
			Router.push("/");
			toast.success(`خدانگهدار ${user.name}`);
			return null;
		} catch (error) {
			toast.error(error.response?.data?.message);
			return rejectWithValue(error.response?.data);
		}
	},
);

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(signUp.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(signUp.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(userAuth.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(userAuth.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(userAuth.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(signOut.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(signOut.fulfilled, (state, action) => {
				state.loading = false;
				state.user = null;
			})
			.addCase(signOut.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default authSlice.reducer;
