import { Link } from "react-router-dom"

const FrontendHeader = () => {

  return (
    <>
      <header id="header" class="header dark-background d-flex flex-column">
        <i class="header-toggle d-xl-none bi bi-list"></i>

        <div class="profile-img">
          <img src="assets/img/my-profile-img.jpg" alt="" class="img-fluid rounded-circle" />
        </div>

        <Link to="index.html" class="logo d-flex align-items-center justify-content-center">
          <img src="assets/img/logo.png" alt="" />
            <h1 class="sitename">Bapi Swarnakar</h1>
        </Link>

        <div class="social-links text-center">
          <Link to="#" class="twitter"><i class="bi bi-twitter-x"></i></Link>
          <Link to="#" class="facebook"><i class="bi bi-facebook"></i></Link>
          <Link to="#" class="instagram"><i class="bi bi-instagram"></i></Link>
          <Link to="#" class="google-plus"><i class="bi bi-skype"></i></Link>
          <Link to="#" class="linkedin"><i class="bi bi-linkedin"></i></Link>
        </div>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><Link to="#hero" class="active"><i class="bi bi-house navicon"></i>Home</Link></li>
            <li><Link to="#about"><i class="bi bi-person navicon"></i> About</Link></li>
            <li><Link to="#resume"><i class="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
            <li><Link to="#portfolio"><i class="bi bi-images navicon"></i> Portfolio</Link></li>
            <li><Link to="#services"><i class="bi bi-hdd-stack navicon"></i> Services</Link></li>
            <li class="dropdown"><Link to="#"><i class="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="#">Dropdown 1</Link></li>
                <li class="dropdown"><Link to="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="#contact"><i class="bi bi-envelope navicon"></i> Contact</Link></li>
          </ul>
        </nav>

      </header>
    </>

  )
}

export default FrontendHeader