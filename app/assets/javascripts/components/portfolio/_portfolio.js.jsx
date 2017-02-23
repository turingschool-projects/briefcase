var Portfolio = React.createClass({
  render: function(){
      var user = this.props.user;

      var allProps = {
        user: this.props.user,
        portfolio: this.props.portfolio,
        locations: this.props.locations,
        avatar: this.props.avatar,
        userLocations: this.props.userLocations
      }

      return(
        <div>
          <SignedInNavbar user={user}/>
          <PortfolioJumbo user={user}/>
          <PortfolioForm allProps={allProps}/>
          <Footer/>
        </div>
      )
  }
});
