var Show = React.createClass({

  render(){
    var user = this.props.user;
    var projects = this.props.projects // props brought from controller
    return (

      <div>
        <GuestNavbar/>
        <GuestJumbo user = {user}/>
        <UserProjectCard user = {user} projects={projects}/>
        <Footer/>
      </div>
    )
  }
});
