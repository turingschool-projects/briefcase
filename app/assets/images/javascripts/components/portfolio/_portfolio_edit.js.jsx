var PortfolioEdit = React.createClass({
  render: function(){
      var user = this.props.user;
      var portfolio = this.props.portfolio;
      var avatar = this.props.avatar;

      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user={user}/>
          <PortfolioEditForm avatar={avatar} user={user} portfolio={portfolio}/>
          <Footer/>
        </div>
      )
  }
});
