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
              { portfolio != null ? <DashboardProfile user={user}/> : <DashboardDefaultCard user={user}/>}
              <DashboardProject user={user} projects={projects}/>
            </div>
          </div>
          <Footer/>
      </div>
    )
  }
})
