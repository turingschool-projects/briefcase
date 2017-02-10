var DashboardProject = React.createClass({
  render(){
    var user = this.props.user;
    var projects = this.props.projects.map((project) => { // props brought from controller
      return (
        <div key={1}>
          <div className="dashboard-project">
            <div className="row">
              <div className="col s8">
                <h1>{project.name}</h1>
                <h3>Created at 3hrs ago</h3>
                <p>{project.description}</p>
              </div>
              <div className="col s4">
              <center>
                <img className="project-picture" src="assets/turing-alumni-banner.jpg" />
                  <a className="card-profile" href={ "/users/" + user.id }>Edit</a>
                  <a className="card-profile delete" href={ "/users/" + user.id }>Delete </a>
                </center>
              </div>
            </div>
            <hr className="dash-line-p"/>
            <center>
            <a className="btn transparent project-btn" href={ "/users/" + user.id +  "/project/new" }>Create New Project <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </center>
          </div>
        </div>
      )
    });

    return(
      <div className="col s8 dashboard-project-container" key={user.id}>
        <h2>My Projects</h2>
        <div className="card">
          <div className="container">
            {projects}
          </div>
        </div>
      </div>
    )
  }
})
