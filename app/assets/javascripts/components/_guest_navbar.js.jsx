var GuestNavbar = React.createClass({
  activePage(){
    $('menu a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
  },
  render(){
  return (
    <div className="navbar">
      <div>
        <a className="logo pull-left" href="/user" title="Home">
          <img src="/assets/turing-logo_1_0.png" alt="Home" className='logo'/>
          <img src="/assets/turing-logo-gear.png" alt="Turing Logo Gear" className="gear"/>
        </a>
        
      </div>
      <div role="navigation" className="pull-right visible-lg menu-container">
        <ul className="menu nav navbar-nav">
          <li className=""><a href="/"><span>The Difference</span></a></li>
          <li className=""><a href="/users/1/edit"><span>Our Team</span></a></li>
          <li className=""><a href="/user/logout"><span>Programs</span></a></li>
          <li className=""><a href="/user/logout"><span>Admissions</span></a></li>
          <li className=""><a href="/user/logout"><span>Tuition</span></a></li>
          <li className=""><a href="/user/logout"><span>Blog</span></a></li>
          <li className=""><a href="/user/logout"><span>Contact</span></a></li>
          <li className=""><a href="/user/logout"><span>Hire a Grad</span></a></li>
          <li className=""><a href="/user/logout"><span>Log In</span></a></li>
        </ul>
      </div>
    </div>
    )
  }
})
