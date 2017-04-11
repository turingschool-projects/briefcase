var DashboardProfile = React.createClass({
  shorterBio :function (text) {
    if (text === null) {
      return ""
    } else {
      return text.substring(0, 193) + "...";
    }
  },

  stripUrl(url){
    return url.replace("https://", "").replace("http://", "");
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
                {
                  this.props.avatar === "/avatars/original/missing.png"
                    ? <img alt="portfolio avatar" className="activator card-picture" src="http://intelligentsystemsmonitoring.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
                    : <img alt="portfolio avatar" className="activator card-picture" src={this.props.avatar}></img>
                }
              </center>
            </div>
            <div className="card-content">
              <center>
                <span className="card-title grey-text text-darken-4">{name}</span>
                <p className="card-title grey-text text-darken-4 ">{portfolio.title}</p>
              </center>
              <hr/>

              <center className="alumni-show-bio"><p className="card-bio" dangerouslySetInnerHTML={{__html: this.shorterBio(this.props.markdownInfo.bio)}}></p></center>

              <div className="card-links">
                <a href={"http://" + this.stripUrl(portfolio.github_url)}><i className="fa fa-github fa-3x social-media" aria-label="Github" aria-hidden="true"></i></a>
                <a href={"http://" + this.stripUrl(portfolio.linkedin_url)}><i className="fa fa-linkedin fa-3x social-media" aria-label="Linkedin" aria-hidden="true"></i></a>
                {portfolio.twitter_url &&
                <a href={"http://" + this.stripUrl(portfolio.twitter_url)}><i className="fa fa-twitter fa-3x social-media" aria-label="Twitter" aria-hidden="true"></i></a>}
                {portfolio.personal_url &&
                <a href={"http://" + this.stripUrl(portfolio.personal_url)}><i className="fa fa-user fa-3x social-media" aria-label="Personal website" aria-hidden="true"></i></a>}
              </div>
              <center>
                <a className="card-profile" href={ `/alumni/${slug}` }>View</a>
                <a className="card-profile" href={ `/users/${user.id}/portfolio/edit` }>Edit </a>
                <a className="card-profile delete" href={ `/users/${user.id}/portfolio/delete` }>Delete</a>
              </center>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
              <p dangerouslySetInnerHTML={{__html: this.shorterBio(this.props.markdownInfo.bio)}}></p>
          </div>
        </div>
      </div>
      )
  }
});
