var Dashboard = React.createClass({
  render(){
    var user = this.props.user;
    var projects = [1];
    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>
          <div className="container dashboard-padding">
            <div className="row">
              <DashboardProfile user={user}/>
              <DashboardProject user={user} projects={projects}/>
            </div>
          </div>
          <Footer/>
      </div>
    )
  }
})
