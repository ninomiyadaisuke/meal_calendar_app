import AppliRouter from "./AppliRouter"
import { Header } from "./components/Header";
import "./assets/style.css"


function App() {
  return (
    <>
      <Header />
      <main className="c-main">
        <AppliRouter/>
      </main>
    </>
    
  );
}

export default App;
