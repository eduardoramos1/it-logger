import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// pegar os logs do servidor
export const getLogs = () => async dispatch => {
	try {
		setLoading();

		const res = await fetch("/logs");
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// setar loading para true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
