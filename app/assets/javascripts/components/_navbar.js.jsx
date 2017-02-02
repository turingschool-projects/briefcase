var Navbar = React.createClass({
  render(){
  return (
    <div class="navbar">
      <div class="">
        <a class="logo pull-left" href="/user" title="Home">
          <img src="https://www.turing.io/sites/default/files/turing-logo_1_0.png" alt="Home"/>
          <img src="/sites/all/themes/ascend/less/img/turing-logo-gear.png" alt="Turing Logo Gear" class="gear"/>
        </a>
        <div class="nav-toggle sb-toggle-right hidden-lg">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <nav role="navigation" class="pull-right visible-lg">
        <ul class="menu nav navbar-nav">
          <li class="first active"><a href="/user"><span>Dashboard</span></a></li>
          <li class=""><a href="/user/866/edit"><span>My Account</span></a></li>
          <li class="last"><a href="/user/logout"><span>Sign Out</span></a></li>
        </ul>
      </nav>
    </div>
    )
  }
})
