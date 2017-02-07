var PortfolioEdit = React.createClass({
  render: function(){
      var user = this.props.user;
      var portfolio = this.props.portfolio;

      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user={user}/>
          <PortfolioEditForm user={user} portfolio={portfolio}/>
          <Footer/>
        </div>
      )
  }
});
