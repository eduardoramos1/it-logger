import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR
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
