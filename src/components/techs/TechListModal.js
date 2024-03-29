import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "./../../actions/techActions";

const TechListModal = ({ getTechs, tech: { loading, techs } }) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4> Lista de Técnicos </h4>
				<ul className="collection">
					{!loading &&
						techs !== null &&
						techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	tech: PropTypes.object.isRequired,
	getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
