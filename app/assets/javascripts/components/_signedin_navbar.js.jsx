var SignedInNavbar = React.createClass({
  activePage(){
    $('menu a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
  },
  render(){
  return (
    <div className="navbar dashboard-navbar">
      <div>
        <a className="logo pull-left" href="/user" title="Home">
          <img src="/assets/turing-logo_1_0.png" alt="Home" className='logo'/>
          <img src="/assets/turing-logo-gear.png" alt="Turing Logo Gear" className="gear"/>
        </a>

      </div>
      <div role="navigation" className="pull-right visible-lg menu-container">
        <ul className="menu nav navbar-nav">
          <li className=""><a href="/dashboard"><span>Dashboard</span></a></li>
          <li className=""><a href="/"><span>My Account</span></a></li>
          <li className=""><a href="/logout"><span>Sign Out</span></a></li>
        </ul>
      </div>
    </div>
    )
  }
})
