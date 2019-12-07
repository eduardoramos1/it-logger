import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";
import { deleteTech } from "./../../actions/techActions";

import PropTypes from "prop-types";

const TechItem = ({ tech, deleteTech }) => {
	const onDelete = () => {
		if (window.confirm("Tem certeza que deseja excluir?")) {
			deleteTech(tech.id);
			M.toast({ html: "Técnico excluído!" });
		}
	};

	return (
		<li className="collection-item">
			<div>
				{tech.firstName + " " + tech.lastName}
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons red-text">delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
