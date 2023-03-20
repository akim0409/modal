import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="bg-emerald-400 flex justify-center">
      <div className="px-4 flex justify-between items-center text-white w-full max-w-3xl">
        <i className="text-4xl fa-solid fa-image"></i>
        <div className="flex">
          <Link className={location.pathname === "/counter" ? "mx-2 text-rose-600" : "mx-2"} to="/counter">counter</Link>
          <Link className={location.pathname === "/modal" ? "mx-2 text-rose-600" : "mx-2"} to="/modal">modal</Link>
        </div>
        </div>
    </div>
  )
}

export default NavBar;