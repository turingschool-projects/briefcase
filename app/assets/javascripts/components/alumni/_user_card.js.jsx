var UserCard = React.createClass({

  fillHeart :function(self){
    $(self.target).toggleClass("fa-heart-o fa-heart");
  },

  shorterBio :function (text) {
    if(text == null) {
      return ""
    } else {
      return text.substring(0, 193);
    }
  },

  render(){
    var avatars = this.props.avatars;
    var bios = this.props.bios;
    var locations = this.props.locations;

    var portfolios = this.props.portfolios.map((portfolio) => { // props brought from controller
      return (
          <div className="col s4 "key={portfolio.id}>
            <div className="card">
            <i className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.fillHeart}></i>
            <i className="material-icons right activator more-vert">more_vert</i>
              <div className="card-image waves-effect waves-block waves-light">
                <center>
                  {
                    avatars[portfolio.id] === "/avatars/original/missing.png"
                    ? <img className="activator card-picture" src="http://intelligentsystemsmonitoring.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" />
                    : <img className="activator card-picture" src={avatars[portfolio.id]} />
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
                  <a href={"http://" + portfolio.github_url}><i className="fa fa-github fa-3x social-media" aria-hidden="true"></i></a>
                  <a href={"http://" + portfolio.linkedin_url}><i className="fa fa-linkedin fa-3x social-media" aria-hidden="true"></i></a>
                  {portfolio.twitter_url &&
                  <a href={"http://" + portfolio.twitter_url}><i className="fa fa-twitter fa-3x social-media" aria-hidden="true"></i></a>}
                  {portfolio.personal_url &&
                  <a href={"http://" + portfolio.personal_url}><i className="fa fa-user fa-3x social-media" aria-hidden="true"></i></a>}
                </div>
                <center><a target="_blank"className="card-profile" href={ "/alumni/" + portfolio.user_slug }>View Profile</a></center>
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
