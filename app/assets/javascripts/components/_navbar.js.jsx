var Navbar = React.createClass({
  render(){
  return (
    <div className="navbar">
      <div>
        <a className="logo pull-left" href="/user" title="Home">
          <img src="https://www.turing.io/sites/default/files/turing-logo_1_0.png" alt="Home" className='logo'/>
          <img src="/assets/turing-logo-gear.png" alt="Turing Logo Gear" className="gear"/>
        </a>
        <div className="nav-toggle sb-toggle-right hidden-lg">
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <nav role="navigation" className="pull-right visible-lg">
        <ul className="menu nav navbar-nav">
          <li className="first active"><a href="/user"><span>Dashboard</span></a></li>
          <li className=""><a href="/user/866/edit"><span>My Account</span></a></li>
          <li className="last"><a href="/user/logout"><span>Sign Out</span></a></li>
        </ul>
      </nav>
    </div>
    )
  }
})
