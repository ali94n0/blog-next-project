// AuthContext.js
import http from "@/services/httpService";
import Router from "next/router";
import React, { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

// Initial state for authentication
const initialState = {
	user: null,
	loading: false,
	error: null,
};

// Action types
const AUTH_REQUEST = "AUTH_REQUEST";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAILURE = "AUTH_FAILURE";

// Reducer function
const authReducer = (state, action) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
				error: null,
			};
		case AUTH_FAILURE:
			return {
				...state,
				loading: false,
				user: null,
				error: action.payload,
			};

		default:
			return state;
	}
};

const asyncActionHandlers = {
	SIGNIN:
		({ dispatch }) =>
		async (action) => {
			dispatch({ type: AUTH_REQUEST });
			http
				.post("/user/signin", action.payload)
				.then((res) => {
					toast.success(`خوش امدی ${res.data.name}`);
					Router.replace("/dashboard");
					dispatch({ type: AUTH_SUCCESS, payload: res.data });
				})
				.catch((err) => {
					dispatch({ type: AUTH_FAILURE, error: err });
					toast.error(err?.response?.data?.message);
				});
		},
	SIGNUP:
		({ dispatch }) =>
		async (action) => {
			dispatch({ type: AUTH_REQUEST });
			http
				.post("/user/signup", action.payload)
				.then((res) => {
					toast.success("ثبتنام با موفقیت انجام شد");
					Router.push("/auth/signin");
					dispatch({ type: AUTH_SUCCESS, payload: res.data });
				})
				.catch((err) => {
					dispatch({ type: AUTH_FAILURE, error: err });
					toast.error(err?.response?.data?.message);
				});
		},
	USERAUTH:
		({ dispatch }) =>
		async (action) => {
			dispatch({ type: AUTH_REQUEST });
			http
				.get("/user/load")
				.then((res) => {
					dispatch({ type: AUTH_SUCCESS, payload: res.data });
				})
				.catch((err) => {
					dispatch({ type: AUTH_FAILURE, error: err });
				});
		},
	SIGNOUT:
		({ dispatch }) =>
		async (action) => {
			dispatch({ type: AUTH_REQUEST });
			http
				.get("/user/logout")
				.then((res) => {
					Router.push("/");
					dispatch({ type: AUTH_SUCCESS, payload: null });
					toast.success(`خدانگهدار ${action.payload.name}`);
				})
				.catch((err) => {
					dispatch({ type: AUTH_FAILURE, error: err });
					toast.error(err?.response?.data?.message);
				});
		},
};

// Context initialization
const AuthContext = createContext();
const AuthDispatchContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducerAsync(
		authReducer,
		initialState,
		asyncActionHandlers,
	);

	return (
		<AuthContext.Provider value={{ state }}>
			<AuthDispatchContext.Provider value={{ dispatch }}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	);
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);

export default AuthContext;
