import AppliRouter from "./AppliRouter";
import "./assets/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<main className="c-main">
				<AppliRouter />
				<ToastContainer />
			</main>
		</>
	);
}

export default App;
