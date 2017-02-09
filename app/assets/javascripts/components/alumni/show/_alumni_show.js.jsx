var AlumniShow = React.createClass({
  render: function(){
      var user = this.props.user;
      var portfolio = this.props.portfolio;
      var projects = this.props.projects;

      return(
        <div>
          <SignedInNavbar/>
          <PortfolioJumbo user={user} portfolio={portfolio}/>
          <AlumniJumboInfo user={user} portfolio={portfolio}/>
          <AlumniBodyInfo user={user} portfolio={portfolio}/>
          <UserProjectCard user={user} projects={projects}/>
          <Footer/>
        </div>
      )
  }
});
