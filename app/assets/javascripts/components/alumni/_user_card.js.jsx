var UserCard = React.createClass({

  fillHeart :function(self){
    $(self.target).toggleClass("fa-heart-o fa-heart");
  },

  shorterBio :function (text) {
    if(text == null) {
      return ""
    } else {
      return text.substring(0, 180);
    }
  },

  stripUrl(url){
    return url.replace("https://", "").replace("http://", "");
  },

  render(){
    var avatars = this.props.avatars;
    var bios = this.props.bios;
    var locations = this.props.locations;

    var portfolios = this.props.portfolios.map((portfolio) => { // props brought from controller
      return (
          <div className="col s4 "key={portfolio.id}>
            <div className="card">
            <i className="fa fa-heart-o left fa-2x" aria-label="favorite graduate" aria-hidden="true" onClick={this.fillHeart}></i>
            <i className="material-icons right activator more-vert">more_vert</i>
              <div className="card-image waves-effect waves-block waves-light">
                <center>
                  {
                    portfolio.avatar_urls.square.includes("missing.png")
                    ? <img alt="portfolio avatar" className="activator card-picture" src="http://intelligentsystemsmonitoring.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" />
                    : <img alt="portfolio avatar" className="activator card-picture" src={portfolio.avatar_urls.square} />
                  }
                </center>
              </div>
              <div className="card-content">
                <center>
                  <span className="card-title grey-text text-darken-4">{portfolio.full_name}</span>
                  <p className="card-title grey-text text-darken-4 ">{portfolio.title}</p>
                </center>
                <hr/>
                <center className="alumni-show-bio"><p className="card-bio" dangerouslySetInnerHTML={{__html: this.shorterBio(bios[portfolio.id])}}></p></center>
                <div className="card-links">
                  <a href={"http://" + this.stripUrl(portfolio.github_url)} aria-label="Github"><i className="fa fa-github fa-3x social-media" aria-label="Github" aria-hidden="true"></i></a>
                  <a href={"http://" + this.stripUrl(portfolio.linkedin_url)} aria-label="LinkedIn"><i className="fa fa-linkedin fa-3x social-media" aria-label="Linkedin" aria-hidden="true"></i></a>
                  {portfolio.twitter_url &&
                  <a href={"http://" + this.stripUrl(portfolio.twitter_url)} aria-label="Twitter"><i className="fa fa-twitter fa-3x social-media" aria-label="twitter" aria-hidden="true"></i></a>}
                  {portfolio.personal_url &&
                  <a href={"http://" + this.stripUrl(portfolio.personal_url)} aria-label="Personal website"><i className="fa fa-user fa-3x social-media" aria-label="personal website" aria-hidden="true"></i></a>}
                </div>
                <center><a className="card-profile" href={ "/alumni/" + portfolio.user_slug }>View Profile</a></center>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
                <p className="card-bio alumni-show-bio" dangerouslySetInnerHTML={{__html: portfolio.bio}}></p>

                <hr className="pop-up"></hr>
                <span className="card-title grey-text text-darken-4">Locations</span>
                <ul className="locations">
                  {locations[portfolio.id].map((location) => {
                    return ( <li>{location.city} {location.state}</li> )
                  })}
                </ul>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          {portfolios}
        </div>
      </div>
    )
  }
})
