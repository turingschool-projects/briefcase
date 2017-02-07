var PortfolioNew = React.createClass({
  render: function(){
      var user = this.props.user;
      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user = {user}/>
        </div>
      )
  }
});
