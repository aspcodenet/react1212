import HeaderMenuItem from "./HeaderMenuItem"

function Header() {

    return (
      <>
      <header>
        <h2>Headern</h2>
        <nav>
            <ul>
            
                <HeaderMenuItem link="test.html" id="2" text="Whatever" ></HeaderMenuItem>
                <HeaderMenuItem link="test2.html" id="3" text="Bla"></HeaderMenuItem>
                <HeaderMenuItem link="test3.html"  id="4" text="Hallo"></HeaderMenuItem>
            </ul>
        </nav>
      </header>
      </>
    )
  }
  
  export default Header