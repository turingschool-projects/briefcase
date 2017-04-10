var DashboardProject = React.createClass({
  render(){
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
                {projectAvatars[project.id] != "/avatars/original/missing.png" &&
                <img alt="project image"className="project-picture" src={projectAvatars[project.id]} /> }
                  <a className="card-profile edit" href={ "/users/" + user.id + "/project/edit?project=" + project.id }>Edit</a>
                  <a className="card-profile delete" id={project.id} onClick={this.handleDelete} >Delete </a>
              </center>
              </div>
          </div>
            <hr className="dash-line-p"/>

        </div>
      </div>
    </div>
  }
})
