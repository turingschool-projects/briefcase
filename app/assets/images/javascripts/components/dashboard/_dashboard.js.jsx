var Dashboard = React.createClass({
  render(){
    var user = this.props.user;
    var projects = this.props.projects;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <SignedInNavbar user={user}/>
        <DashboardJumbo/>
          <div className="container dashboard-padding">
            <div className="row dashboard-row">
              { portfolio != null ? <DashboardProfile user={user} portfolio={portfolio} avatar={this.props.avatar}/> : <DashboardDefaultCard user={user} portfolio={portfolio}/>}

              { projects.length > 0 ?  <DashboardProject user={user} projects={projects}/>: <NoDashboardProjects user={user} portfolio={portfolio}/>}

            </div>
          </div>
          <Footer/>
      </div>
    )
  }
})
