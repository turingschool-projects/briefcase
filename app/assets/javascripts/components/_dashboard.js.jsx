var Dashboard = React.createClass({
  render(){
    var user = this.props.current_user;
    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>
      </div>
    )
  }
})
