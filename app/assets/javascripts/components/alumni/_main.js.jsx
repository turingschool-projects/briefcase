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
    var user = this.props.user;
    var newPortfolios = this.state.newPortfolios;

    if(user != null) {
      return (
        <div>
          <SignedInNavbar user={user}/>
          <MainJumbo/>
          <MainSearch prepNewPortfolios={this.prepNewPortfolios} port_asc={this.props.port_asc} port_desc={this.props.port_desc} portfolios={this.props.portfolios} locations={this.props.locations}/>
            <UserCard portfolios={newPortfolios}  avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <GuestNavbar/>
          <MainJumbo/>
          <MainSearch prepNewPortfolios={this.prepNewPortfolios} port_asc={this.props.port_asc} port_desc={this.props.port_desc} portfolios={this.props.portfolios} locations={this.props.locations}/>
          <UserCard portfolios={newPortfolios} avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
          <Footer/>
        </div>
      )
    }
  }
})
