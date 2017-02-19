var PortfolioNew = React.createClass({
  render: function(){
      var user = this.props.user;

      return(
        <div>
          <SignedInNavbar user={user}/>
          <PortfolioJumbo user={user}/>
          <PortfolioNewForm user={user}/>
          <Footer/>
        </div>
      )
  }
});
