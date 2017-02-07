var PortfolioShow = React.createClass({
  render: function(){
      var user = this.props.user;
      var projects = this.props.projects;
      var portfolio = this.props.portfolio;

      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user={user} portfolio={portfolio}/>
          <PortfolioJumboInfo user={user} portfolio={portfolio}/>
          <PortfolioBodyInfo user={user} portfolio={portfolio}/>
          <UserProjectCard user={user} projects={projects}/>
          <Footer/>
        </div>
      )
  }
});
