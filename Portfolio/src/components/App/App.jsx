import { AnimatedRoutes } from "../AnimatedRoutes/AnimatedRoutes";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="background"></div>
        <NavBar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}
