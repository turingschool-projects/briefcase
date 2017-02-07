var DashboardProfile = React.createClass({
  shorterBio :function (text) {
    return text.substring(0, 193);
  },

  render: function(){

      var user = this.props.user;
      return(
        <div className="col s4 dashboard-container" key={user.id}>
          <h2>My Profile</h2>
          <div className="card">
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
              <center><p className="card-bio">{this.shorterBio(user.bio)}...</p></center>
              <div className="card-links">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
              </div>
              <center>
                <a className="card-profile" href={ `/users/${user.id}/portfolio` }>View</a>
                <a className="card-profile" href={ `/users/${user.id}/portfolio/edit` }>Edit </a>
                <a className="card-profile delete" href={ "/users/" + user.id }>Delete</a>
              </center>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
              <p>{user.bio}</p>
          </div>
        </div>
      </div>
      )
  }
});
