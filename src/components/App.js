import React, { useState } from "react";
import Nav from "./Nav";
import TileHolder from "./TileHolder";

import hogs from "../porkers_data";

function App() {
	const [hogData, setHogData] = useState({
		name: "",
		specialty: "",
		greased: Boolean,
		weight: 0,
		"highest medal achieved": "",
		image: "src"
})
	function handleHogData(){
		setHogData({...hogData, hogs})
}

	return (
		<div className="App">
			<Nav />
			<TileHolder hogs={hogs}/>
		</div>
	);
}

export default App;
