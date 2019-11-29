import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	// O técnico e setar qual tecnico

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({ html: "Por favor informe o nome e o sobrenome" });
		} else {
			console.log(firstName, lastName);

			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>Add técnico</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							onChange={ev => setFirstName(ev.target.value)}
						/>
						<label htmlFor="firstName" className="active">
							Nome do técnico
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastName}
							onChange={ev => setLastName(ev.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Sobrenome do técnico
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close blue darken-4 waves-effect waves-light btn"
				>
					Add
				</a>
			</div>
		</div>
	);
};

export default AddTechModal;
