var Main = React.createClass({
  render(){
    var signedIn = this.props.signed_in;
    var portfolios = this.props.portfolios;

    if(signedIn == 1) {
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
