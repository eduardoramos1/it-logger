import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getLogs } from "./../../actions/logActions";

import LogItem from "./LogItem";
import Preloader from "./../layout/Preloader";

// destructuring do log que o redux está me dando
const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">Logs do Sistema</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center"> Nenhum logo para mostrar...</p>
			) : (
				logs.map(log => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

Logs.propTypes = {
	log: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
