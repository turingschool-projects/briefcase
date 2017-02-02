var Edit = React.createClass({
  render(){
    var user = this.props.user; // props brought from controller

    return (
      <div>
        <h1>{user.first_name} {user.last_name}</h1>
        <p>{user.description}</p>

      </div>
    )
  }
})
