import React, { useRef } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs } from "./../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
	const text = useRef("");

	return (
		<nav style={{ marginBottom: "30px" }} className="purple darken-4">
			<div className="nav-wrapper">
				<form onSubmit={() => searchLogs(text)}>
					<div className="input-field">
						<input
							id="search"
							type="search"
							required
							ref={text}
							onChange={ev => searchLogs(text.current.value)}
							onBlur={ev => (ev.target.style.color = "white")}
							onFocus={ev => (ev.target.style.color = "#444")}
							placeholder="Pesquisar logs..."
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
