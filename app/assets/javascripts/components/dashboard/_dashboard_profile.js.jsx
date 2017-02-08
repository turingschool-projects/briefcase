var DashboardProfile = React.createClass({
  shorterBio :function (text) {
    if (text === null) {
      return ""
    } else {

      return text.substring(0, 193);
    }
  },

  render: function(){
      var user = this.props.user;
      var slug = this.props.user.slug;
      var portfolio = this.props.portfolio;


      if(portfolio.full_name != null){
        var name = portfolio.full_name;
      } else {
        var name = `${user.first_name} ${user.last_name}`;
      }

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
                <span className="card-title grey-text text-darken-4">{name}</span>
                <p className="card-title grey-text text-darken-4 ">{user.title}</p>
              </center>
              <hr/>
              <center><p className="card-bio">{this.shorterBio(user.bio)}...</p></center>
              <div className="card-links">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
              </div>
              <center>
                <a className="card-profile" href={ `/alumni/${slug}/portfolio` }>View</a>
                <a className="card-profile" href={ `/alumni/${slug}/portfolio/edit` }>Edit </a>
                <a className="card-profile delete" href={ `/alumni/${slug}/portfolio/delete` }>Delete</a>
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
