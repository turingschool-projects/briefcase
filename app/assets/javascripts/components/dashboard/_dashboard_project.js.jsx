var DashboardProject = React.createClass({
  handleDelete(event){
    var user = this.props.user;
    var id = event.target.id;
    axios.delete(`/users/${user.id}/project?project=${id}`)
    .then(response => {
      window.location = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  },

  shorten(description){
    return description.substring(0,150);
  },

  render(){
    var user = this.props.user;
    var projectAvatars = this.props.projectAvatars
    var projects = this.props.projects.map((project) => {
      return (
        <div key={project.id}>
            <div className="container">
              <div className="dashboard-project">
                <div className="row">
                  <div className="col s8">
                    <h1>{project.name}</h1>
                    <h3 className="time-ago">Created: {this.timeSince(project.created_at)} ago</h3>
                    <p className="description">{this.shorten(project.description)}...</p>
                  </div>
                  <div className="col s4">
                  <center>
                    <img className="project-picture" src={projectAvatars[project.id]} />
                      <a className="card-profile" href={ "/users/" + user.id + "/project/edit?project=" + project.id }>Edit</a>
                      <a className="card-profile delete" id={project.id} onClick={this.handleDelete} >Delete </a>
                    </center>
                  </div>
                </div>
                <hr className="dash-line-p"/>

              </div>
            </div>
          </div>

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
