var Dashboard = React.createClass({
  render(){
    var user = this.props.user;
    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>

        <DashboardProfile user={user}/>
      </div>
    )
  }
})
