var Main = React.createClass({
  getInitialState(){
    return {
      newPortfolios: this.props.portfolios
    }
  },

  prepNewPortfolios :function(filterPortfolios){
    this.setState({newPortfolios: filterPortfolios});
  },

  render(){
    var signedIn = this.props.signed_in;
    var portfolios = this.props.portfolios;
    var user = this.props.user;
    var newPortfolios = this.state.newPortfolios;

    if(user != null) {
      return (
        <div>
          <SignedInNavbar user={user}/>
          <MainJumbo/>
          <MainSearch prepNewPortfolios={this.prepNewPortfolios} portfolios={this.props.portfolios}/>
          <UserCard portfolios ={newPortfolios} avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <GuestNavbar/>
          <MainJumbo/>
          <MainSearch/>
          <UserCard portfolios = {portfolios} avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
          <Footer/>
        </div>
      )
    }
  }
})
