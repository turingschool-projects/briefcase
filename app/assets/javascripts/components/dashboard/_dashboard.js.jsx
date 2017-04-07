var Dashboard = React.createClass({
  render(){

    return (
      <div>
        <SignedInNavbar user={this.props.user}/>
        <DashboardJumbo/>
          <div className="container dashboard-padding">
            <div className="row dashboard-row">
              { this.props.portfolio != null
                ?
                <DashboardProfile user={this.props.user} portfolio={this.props.portfolio} avatar={this.props.avatar} markdownInfo={this.props.markdownInfo}/>
                :
                <DashboardDefaultCard user={this.props.user} portfolio={this.props.portfolio}/>
              }

              { this.props.projects != null && this.props.projects.length > 0
                ?
                <DashboardProject projectAvatars={this.props.project_avatars} user={this.props.user} projects={this.props.projects}/>
                :
                <NoDashboardProjects user={this.props.user} portfolio={this.props.portfolio}/>
              }
            </div>
          </div>
          <Footer/>
      </div>
    )
  }
})
