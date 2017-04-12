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
    if(this.props.user != null) {
      var navbar = <SignedInNavbar user={this.props.user}/>
    }
    else {
      var navbar = <GuestNavbar/>
    }
    return (
      <div>
        {navbar}
        <MainJumbo/>
        <MainSearch prepNewPortfolios={this.prepNewPortfolios} port_asc={this.props.port_asc} port_desc={this.props.port_desc} portfolios={this.props.portfolios} locations={this.props.locations}/>
          <UserCard portfolios={this.state.newPortfolios}  avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
        <Footer/>
      </div>
    )
  }
})
