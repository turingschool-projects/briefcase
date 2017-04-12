var DashboardProjects = React.createClass({
  shorten(description){
    return description.substring(0,150);
  },

  render(){
    var user = this.props.user;
    var projects = this.props.projects.map((project) => {
      return (
        <DashboardProject user={this.props.user} project={project} projectAvatars={this.props.projectAvatars}/>
      )
    });

    return(
      <div>
        <h2 className="col s8  style-h2">My Projects</h2>
      <div className="col s8 dashboard-project-container card">
        {projects}
        <center>
        {projects.length < 3 ? <a className="btn transparent project-btn" href={ "/users/" + user.id +  "/project/new" }>Create New Project <i className="fa fa-arrow-right" aria-hidden="true"></i></a>:
        <p className="project-limit">You have reached your limit of projects</p>}
        </center>
      </div>
    </div>
    )
  }
})
