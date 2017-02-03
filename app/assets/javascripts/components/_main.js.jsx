var Main = React.createClass({
  render(){
    var signedIn = this.props.signed_in
    var users = this.props.users.map((user) => { // props brought from controller
      return (
        <div key={user.id}>
          <h1>{user.first_name}</h1>
          <a href={ "users/" + user.id }>View Profile</a>
          <a href={ "users/" + user.id + "/edit"}>Edit Account</a>
        </div>
      )
    });

    if(signedIn === 1) {
      return (
        <div>
          <SignedInNavbar/>

          <h1>Welcome</h1>
          {users}
        </div>
      )
    } else {
      return (
        <div>
          <GuestNavbar/>
          <MainJumbo/>

        </div>
      )
    }
  }
})
