import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component.jsx";

const Hatspage = (probs) => {
	console.log(probs);
	return (
		<div>
			<h1>Hats page</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Routes>
				{/* <Route exact path="/" compoent={Homepage} /> */}
				<Route exact path="/" element={<Homepage />} />
				<Route path="/hats" element={<Hatspage />} />
				{/* // <Route path="/hats" compoent={Hatspage} /> */}
			</Routes>
			{/* <Hatspage /> */}
			{/* <Homepage /> */}
		</div>
	);
}

export default App;
