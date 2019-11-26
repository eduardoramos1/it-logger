import React, { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
	useEffect(() => {
		// Inicializa Materialize JS, permitindo usar componentes javascript como, por exemplo, modais
		M.AutoInit();
	});
	return (
		<div className="App">
			<SearchBar />
			<div className="container">
				<Logs />
			</div>
		</div>
	);
};

export default App;
