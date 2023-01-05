import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";
import { getIsCollapsedSelector } from "./store/selectors";

function App() {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  return (
    <BrowserRouter>
      <Navbar />
      <div className={!isCollapsed ? "ml-80" : ""}>
        <h1>Hello, World</h1>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
