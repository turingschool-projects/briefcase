var Main = React.createClass({
  render(){
    var users = this.props.users.map((user) => { // props brought from controller
      return (
        <div key={user.id}>
          <h1>{user.first_name}</h1>

          <a href={ "users/" + user.id + "/edit"}>Edit Account</a>
        </div>
      )
    });

    return (
      <div>
        <a href={ "/auth/census"}>Login with Census</a>
        {users}
      </div>
    )
  }
})
