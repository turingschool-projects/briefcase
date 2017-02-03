var UserCard = React.createClass({
  fillHeart :function(self){
    $(self.target).toggleClass("fa-heart-o fa-heart");
  },
  render(){
    var users = this.props.users.map((user) => { // props brought from controller
      return (
          <div className="col s4"key={user.id}>
            <div className="card">

            <i className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.fillHeart}></i>
            <i className="material-icons right activator">more_vert</i>

              <div className="card-image waves-effect waves-block waves-light">
                <center>
                  <img className="activator card-picture" src="assets/turing-alumni-banner.jpg" />
                </center>
              </div>
              <div className="card-content">
                <center>
                  <span className="card-title grey-text text-darken-4">{user.first_name} {user.last_name }</span>
                  <p className="card-title grey-text text-darken-4 ">{user.title}</p>
                </center>
                <hr/>
                <p>{user.bio}</p>
                <div className="card-links">
                  <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                  <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                </div>
                <center><a className="card-profile" href={ "/users/" + user.id }>View Profile</a></center>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>{user.bio}</p>
            </div>
          </div>
        </div>

      )
    });

    return (
      <div className="container">

      <div className="row">
        {users}
      </div>
    </div>

    )
  }
})
