import HeaderMenuItem from "./HeaderMenuItem"

function Header() {

    return (
      <>
<header className="siteheader">
        <div className="logo">
            <i className='bx bxs-cat logoicon'></i>
            Cat<span className="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem link="/" text="Start" ></HeaderMenuItem>
                <HeaderMenuItem link="/Contact"  text="Contact"></HeaderMenuItem>
                <HeaderMenuItem link="test3.html"  text="Hallo"></HeaderMenuItem>
            </ul>
        </nav>
        <ul className="navicons">
           <li><a className="navanchor" href="#"><i className='bx bx-search-alt navicon'></i></a></li> 
           <li><a className="navanchor" href="#"><i className='bx bx-menu navicon' ></i></a></li> 
        </ul>
      </header>
      </>
    )
  }
  
  export default Header