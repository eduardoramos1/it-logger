import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
	DELETE_LOG
} from "./types";

// buscar tecnicos do servidor
export const getTechs = () => async dispatch => {
	try {
		setLoading();

		const res = await fetch("/techs");
		const data = await res.json();

		dispatch({
			type: GET_TECHS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText
		});
	}
};
//  setar loading para true

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};

export const addTech = tech => async dispatch => {
	try {
		setLoading();

		const res = await fetch("/techs", {
			method: "POST",
			body: JSON.stringify(tech),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await res.json();

		dispatch({
			type: ADD_TECH,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText
		});
	}
};

// deletar técnico

export const deleteTech = id => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`/techs/${id}`, {
			method: "DELETE",
			"Content-Type": "application/json"
		});

		dispatch({
			type: DELETE_TECH,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText
		});
	}
};
