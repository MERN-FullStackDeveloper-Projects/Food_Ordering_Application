
import "./Home.css";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";

// import { Link} from "react-router-dom";
function Home() {



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/home'>Food App</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to='/home'>
                Home
              </Link>
              <Link className="nav-link" to='/cart'>
                Cart
              </Link>
              <Link className="nav-link" to='/orders' >
                Orders
              </Link>
              <Link className="nav-link disabled" aria-disabled="true">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <NavBar/>
      <div className="container">
     
      {/*placeholder to load the child component*/}
      <Outlet/>
      </div>
    </div>
  );
}

export default Home;
