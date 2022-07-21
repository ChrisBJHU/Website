import Home from "./Home";
import NavProvider from "../../nav/NavContext";

function Main() {
  return (
    <div className="appContainer">
      <NavProvider>
        <Home />
      </NavProvider>
    </div>
  );
}

export default Main;
