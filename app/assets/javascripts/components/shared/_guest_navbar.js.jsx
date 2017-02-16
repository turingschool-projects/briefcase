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
          <li className="https://www.turing.io/turing-difference"><a href="/"><span>The Difference</span></a></li>
          <li className="https://www.turing.io/our-team"><a href="/users/1/edit"><span>Our Team</span></a></li>
          <li className="https://www.turing.io/programs"><a href="#"><span>Programs</span></a></li>
          <li className="https://www.turing.io/admissions"><a href="#"><span>Admissions</span></a></li>
          <li className="https://www.turing.io/tuition"><a href="#"><span>Tuition</span></a></li>
          <li className="https://www.turing.io/blog"><a href="#"><span>Blog</span></a></li>
          <li className="https://www.turing.io/contact"><a href="#"><span>Contact</span></a></li>
          <li className="https://www.turing.io/why-hire-grad"><a href="#"><span>Hire a Grad</span></a></li>
          <li className=""><a href="/auth/census"><span>Log In</span></a></li>
        </ul>
      </div>
    </div>
    )
  }
})
