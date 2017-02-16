var ProjectEdit = React.createClass({
  render: function(){
    var user = this.props.user;
    var project = this.props.project
    debugger;

      return(
        <div>
          <SignedInNavbar/>
          <ProjectJumbo/>
          <ProjectEditForm project={project}/>
          <Footer/>
        </div>
      )
  }
});
