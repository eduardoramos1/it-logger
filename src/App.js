import React, { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";

import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

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
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<Logs />
			</div>
		</div>
	);
};

export default App;
