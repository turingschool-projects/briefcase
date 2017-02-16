var Dashboard = React.createClass({
  render(){
    var user = this.props.user;
    var projects = this.props.projects;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>
          <div className="container dashboard-padding">
            <div className="row">
              { portfolio != null ? <DashboardProfile user={user} portfolio={portfolio}/> : <DashboardDefaultCard user={user} portfolio={portfolio}/>}

              { projects.length > 0 ?  <DashboardProject user={user} projects={projects}/>: <NoDashboardProjects user={user} portfolio={portfolio}/>}
              
            </div>
          </div>
          <Footer/>
      </div>
    )
  }
})
