var PortfolioShow = React.createClass({
  render: function(){
      var user = this.props.user;
      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user = {user}/>
          <PortfolioJumboInfo user = {user}/>
          <PortfolioBodyInfo user = {user}/>
          
          <Footer/>
        </div>
      )
  }
});
