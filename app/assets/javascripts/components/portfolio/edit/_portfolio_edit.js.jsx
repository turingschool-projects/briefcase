var PortfolioEdit = React.createClass({
  render: function(){
      var user = this.props.user;
      var portfolio = this.props.portfolio;
      var avatar = this.props.avatar;

      return(
        <div>
          <SignedInNavbar user={user}/>
          <PortfolioJumbo user={user}/>
          <PortfolioEditForm locations={this.props.locations} avatar={avatar} user={user} portfolio={portfolio} userLocations={this.props.userLocations}/>
          <Footer/>
        </div>
      )
  }
});
