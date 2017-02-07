var Dashboard = React.createClass({
  render(){
    var user = this.props.user;
    var projects = [1];
    var portfolio = this.props.portfolio;

    if(portfolio != null) {
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
    } else {
      return (
        <div>
          <SignedInNavbar/>
          <DashboardJumbo/>
            <div className="container dashboard-padding">
              <div className="row">
                <DashboardDefaultCard user={user}/>
                <DashboardProject user={user} projects={projects}/>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }

  }
})
