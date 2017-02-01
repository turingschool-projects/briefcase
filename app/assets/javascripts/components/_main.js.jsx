var Main = React.createClass({
  render(){
    var users = this.props.users.map((user) => { // props brought from controller
      return (
        <div key={user.id}>
          <h1>{user.first_name}</h1>
        </div>
      )
    });

    return (
      <div>
        <a href={ this.props.newUserPath }>Create new Account</a>
        {users}
      </div>
    )
  }
})
