var AlumniJumboInfo = React.createClass({

  stripUrl(url){
		return url.replace("https://", "").replace("http://", "");
	},

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="container">
          <div className='portfolio-name-container'>
            <div className="show-name-holder">
              <div className="col s12">
                <div className="row">
                  <div className='col s4'>
                  </div>
                  <div className="col s4">
                      <h1 className="full-name">{portfolio.full_name}</h1>
                  </div>
                  <div className="col s4 offset-s4">
                      <p>{portfolio.title}</p>
                  </div>
                  <ul className='pull-right' >
                    {this.props.resume != '/resumes/original/missing.png' &&
                      <a href={this.props.resume} target="_blank"><li><button className='title btn transparent resume-btn'>Resume</button></li></a>
                    }
                    {portfolio.linkedin_url &&
                      <a href={'http://' + this.stripUrl(portfolio.linkedin_url)}><li><button className='title btn transparent linkedin-btn'><i className="fa fa-linkedin fa-3x" aria-hidden="true" aria-label="linkedin"></i></button></li></a>
                    }
                    {portfolio.twitter_url &&
                      <a href={'http://' + this.stripUrl(portfolio.twitter_url)}><li><button className='title btn transparent linkedin-btn'><i className="fa fa-twitter fa-3x" aria-hidden="true" aria-label="twitter"></i></button></li></a>
                    }
                    {portfolio.personal_url &&
                      <a href={'http://' + this.stripUrl(portfolio.personal_url)}><li><button className='title btn transparent linkedin-btn'><i className="fa fa-user fa-3x" aria-hidden="true" aria-label="personal site"></i></button></li></a>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
