import { NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import Account from "./Profile";
import LoginMenu from "./LoginMenu";
import { connect } from 'react-redux'

function NavBar(props) {
  return (
    <div className="flex justify-center bg-white">
      <div className="container flex flex-row justify-between items-center ">
        <h1 className="font-logo text-accent-red text-5xl p-3 sm:ml-10">
          <NavLink to="/">Petsy</NavLink>
        </h1>
        <div className="flex flex-row align-middle items-center px-4 py-1 rounded link">
          <NavLink className="flex align-middle items-center" to="/search"><BiSearchAlt />Search</NavLink>
        </div>
        <div className="relative flex sm:mr-10">{props.isAuth ? <Account /> : <LoginMenu />}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth : state.authenticationRed.isAuthenticated
  }
}

export default connect(mapStateToProps)(NavBar);
