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
          <AlumniBodyInfo user={user} portfolio={portfolio} avatar={this.props.avatar}/>
          {projects.length > 0 &&
          <UserProjectCard avatars={this.props.project_avatar_urls}user={user} projects={projects}/>}
          <Footer/>
        </div>
      )
  }
});
