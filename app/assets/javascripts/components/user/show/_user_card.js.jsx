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
    var portfolios = this.props.portfolios.map((portfolio) => { // props brought from controller
    var slug_name = portfolio.full_name.toLowerCase().replace(/ /g, '-')
      return (
          <div className="col s4 "key={portfolio.id}>
            <div className="card">
            <i className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.fillHeart}></i>
            <i className="material-icons right activator more-vert">more_vert</i>
              <div className="card-image waves-effect waves-block waves-light">
                <center>
                  <img className="activator card-picture" src="assets/turing-alumni-banner.jpg" />
                </center>
              </div>
              <div className="card-content">
                <center>
                  <span className="card-title grey-text text-darken-4">{portfolio.full_name}</span>
                  <p className="card-title grey-text text-darken-4 ">{portfolio.title}</p>
                </center>
                <hr/>
                <center><p className="card-bio">{this.shorterBio(portfolio.bio)}...</p></center>
                <div className="card-links">
                  <a href={"http://" + portfolio.github_url}><i className="fa fa-github fa-3x social-media" aria-hidden="true"></i></a>
                  <a href={"http://" + portfolio.linkedin_url}><i className="fa fa-linkedin fa-3x social-media" aria-hidden="true"></i></a>
                </div>
                <center><a className="card-profile" href={ "/alumni/" + portfolio.user_slug }>View Profile</a></center>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
                <p>{portfolio.bio}</p>
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
