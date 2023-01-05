import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Hamburger from "./components/Navbar/Hamburger";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";
import { getIsCollapsedSelector } from "./store/selectors";

function App() {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  return (
    <BrowserRouter>
      <Navbar />
      <Hamburger />
      <div className={!isCollapsed ? "ml-80" : ""}>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
