var PortfolioShow = React.createClass({
  render: function(){
      var user = this.props.user;
      var projects = this.props.projects;
      
      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user = {user}/>
          <PortfolioJumboInfo user = {user}/>
          <PortfolioBodyInfo user = {user}/>
          <UserProjectCard user = {user} projects={projects}/>
          <Footer/>
        </div>
      )
  }
});
