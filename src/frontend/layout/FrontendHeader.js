import { Link } from "react-router-dom"

const FrontendHeader = () => {

  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img src="assets/img/1.jpeg" alt="" className="img-fluid rounded-circle" />
        </div>

        <Link to="index.html" className="logo d-flex align-items-center justify-content-center">
          {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">Bapi Swarnakar</h1>
        </Link>

        <div className="social-links text-center">
          <Link to="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
          <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
          <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
          <Link to="#" className="google-plus"><i className="bi bi-skype"></i></Link>
          <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
            <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
            <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
            {/* <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li> */}
            <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
          </ul>
        </nav>

      </header>
    </>

  )
}

export default FrontendHeader