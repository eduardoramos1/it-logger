import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "./../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ updateLog, current }) => {
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	// O técnico e setar qual tecnico
	const [tech, setTech] = useState("");

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === "" || tech === "") {
			M.toast({ html: "Por favor informe a mensagem e um técnico" });
		} else {
			const updatedLog = {
				id: current.id,
				message,
				attention,
				tech,
				date: new Date()
			};

			updateLog(updatedLog);
			M.toast({ html: "Log alterado !" });

			// setMessage("");
			// setTech("");
			// setAttention(false);
		}
	};

	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Log do Sistema</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							id="message"
							value={message}
							onChange={ev => setMessage(ev.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<select
							name="tech"
							value={tech}
							className="browser-default"
							onChange={ev => setTech(ev.target.value)}
						>
							<option value="" disabled>
								Selecione um técnico
							</option>
							<option value="Zé Doe">Zé Doe</option>
							<option value="Eduardo Ramos">Eduardo Ramos</option>
							<option value="Wilson Wilsooon">Wilson Wilsooon</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={ev => setAttention(!attention)}
								/>
								<span>Precisa de Atenção</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close purple darken-2 waves-effect waves-light btn"
				>
					Confirmar
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

EditLogModal.propTypes = {
	updateLog: PropTypes.func.isRequired,
	current: PropTypes.object
};

const mapStateToProps = state => ({
	current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
