var AlumniBodyInfo = React.createClass({
  showEmail: function(event){
    $('.email-btn')[0].innerText = this.props.portfolio.email
  },
  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;
    return (
      <div>
        <div className="container">
          <div className="row about-me">
            <div className='col s4 graduate-picture'>
              <img className="alumni-avatar" src={this.props.avatar}></img>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About Me</h1>
            </div>
            <div className="col s8 offset-s4 alumni-show-bio">
              <p dangerouslySetInnerHTML={{__html: this.props.markdownInfo.bio}}></p>
            </div>
            <div className=" col s8 offset-s4">
            <ul>
              <li><button onClick={this.showEmail} className='btn transparent email-btn'>Click For Email <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></li>
              <li><a target="_blank" href={"http://" + portfolio.github_url}><button className='btn transparent github-btn'>GitHub Profile  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></a></li>
            </ul>
          </div>
        </div>
        <AlumniMidInfo user={user} portfolio={portfolio} locations={this.props.locations} markdownInfo={this.props.markdownInfo}/>
      </div>
    </div>
    );
  }
});
