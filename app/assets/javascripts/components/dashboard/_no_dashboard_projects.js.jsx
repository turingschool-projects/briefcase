var NoDashboardProjects = React.createClass({
  render(){
    var user = this.props.user;
    var portfolio = this.props.portfolio;
    return(
      <div className="col s8 dashboard-project-container" >
        <h2>My Projects</h2>
        <div className="card no-projects">
          <div className="container">
            <div key={1}>
              <div className="dashboard-project">
                    <p>Looks like you don't have any projects yet. After creating projects, a website administrator will review it, and approve it.</p>
                <center>
                {portfolio != null &&
                <a className="btn transparent project-btn" href={  `/users/${user.id}/project/new`}>Create New Project <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                }
              </center>
              </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
})
