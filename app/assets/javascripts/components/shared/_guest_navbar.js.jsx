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
        <a className="logo pull-left" href="/alumni" title="Home">
          <img src="/assets/turing-logo_1_0.png" alt="Home" className='logo'/>
          <img src="/assets/turing-logo-gear.png" alt="Turing Logo Gear" className="gear"/>
        </a>

      </div>
      <div role="navigation" className="pull-right visible-lg menu-container">
        <ul className="menu nav navbar-nav">
          <li className="the-difference"><a href="https://www.turing.io/turing-difference"><span>The Difference</span></a></li>
          <li className=""><a href="https://www.turing.io/our-team"><span>Our Team</span></a></li>
          <li className=""><a href="https://www.turing.io/programs"><span>Programs</span></a></li>
          <li className=""><a href="https://www.turing.io/admissions"><span>Admissions</span></a></li>
          <li className=""><a href="https://www.turing.io/tuition"><span>Tuition</span></a></li>
          <li className=""><a href="https://www.turing.io/blog"><span>Blog</span></a></li>
          <li className=""><a href="https://www.turing.io/contact"><span>Contact</span></a></li>
          <li className=""><a href="/alumni"><span>Alumni</span></a></li>
          <li className=""><a href="/auth/census"><span>Log In</span></a></li>
        </ul>
      </div>
    </div>
    )
  }
})
