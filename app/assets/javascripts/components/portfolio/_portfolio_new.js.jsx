var PortfolioNew = React.createClass({
  render: function(){
      var user = this.props.user;
      var locations = this.props.locations
      return(
        <div>
          <SignedInNavbar user={user}/>
          <PortfolioJumbo user={user}/>
          <PortfolioNewForm user={user} locations={locations}/>
          <Footer/>
        </div>
      )
  }
});
