var Main = React.createClass({
  render(){
    var signedIn = this.props.signed_in;
    var portfolios = this.props.portfolios;
    var user = this.props.user;
    if(user != null) {
      return (
        <div>
          <SignedInNavbar/>
          <MainJumbo/>
          <MainSearch/>
          <UserCard portfolios = {portfolios}/>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <GuestNavbar/>
          <MainJumbo/>
          <MainSearch/>
          <UserCard portfolios = {portfolios}/>
          <Footer/>
        </div>
      )
    }
  }
})
