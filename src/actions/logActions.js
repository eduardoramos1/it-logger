import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	UPDATE_LOG,
	CLEAR_CURRENT,
	SEARCH_LOGS
} from "./types";

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
			payload: err.response.statusText
		});
	}
};

// setar loading para true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};

//add log

export const addLog = log => async dispatch => {
	try {
		setLoading();

		const res = await fetch("/logs", {
			method: "POST",
			body: JSON.stringify(log),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// remover log
export const deleteLog = id => async dispatch => {
	try {
		setLoading();

		await fetch(`/logs/${id}`, {
			method: "DELETE"
		});

		dispatch({
			type: DELETE_LOG,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// atualiza log
export const updateLog = log => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`, {
			method: "PUT",
			body: JSON.stringify(log),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// busca logs
export const searchLogs = text => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// Seta o log atual ( no modal de edição de log)

export const setCurrent = log => {
	return {
		type: SET_CURRENT,
		payload: log
	};
};

// limpa o log atual
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};
