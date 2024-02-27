import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/CounterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex justify-content-between p-4 ">
      <h2>
        REDUX <span className="text-primary">TOOLKİT</span>
      </h2>
      <nav className="d-flex gap-3 align-items-center">
        <NavLink to={"/"}>SAYAÇ</NavLink>
        <NavLink to={"/crud"}> CRUD</NavLink>
        <button onClick={() => dispatch(toggleTheme())}>Tema Degis</button>
      </nav>
    </header>
  );
};

export default Header;
