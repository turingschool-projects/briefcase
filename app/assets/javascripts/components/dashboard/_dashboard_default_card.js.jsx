var DashboardDefaultCard = React.createClass({
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
                <img alt="portfolio avatar" className="activator card-picture" src="http://www.webtutorialspoint.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" />
              </center>
            </div>
            <div className="card-content">
              <center>
                <span className="card-title grey-text text-darken-4">Your Name</span>
                <p className="card-title grey-text text-darken-4 ">Your Expertise</p>
              </center>
              <hr/>
              <center><p className="card-bio">A description of yourself, your background, languages you are good at, and whatever else you would like to include in our bio</p></center>
              <center>
                <div className='col s12 project-default-buttons'>
  	              <ul>
  	                <li><a href={"/users/" + user.id + "/portfolio/new"}><button id="create-profile" className='btn transparent repository-btn'>Create Profile <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></a></li>
  	              </ul>
                </div>
              </center>
            </div>
        </div>
      </div>
      )
  }
});
