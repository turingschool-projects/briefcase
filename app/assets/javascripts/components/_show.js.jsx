var Show = React.createClass({

  render(){
    var user = this.props.user; // props brought from controller

    return (

      <div>
        <GuestNavbar/>
        <GuestJumbo user = {user}/>
        <h1>{user.first_name} {user.last_name}</h1>
        <p>{user.description}</p>
        <p>{user.bio}</p>
        <p>{user.github_url}</p>
        <p>{user.linkedin_url}</p>
      </div>
    )
  }
});
