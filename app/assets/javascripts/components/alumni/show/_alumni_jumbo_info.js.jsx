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
                  <ul className='pull-right'>
                    {this.props.resume != '/resumes/original/missing.png' &&
                      <li><a href={this.props.resume} target="_blank"><li><button className='title btn transparent resume-btn'>Resume</button></li></a></li>
                    }
                    {portfolio.linkedin_url &&
                      <li><a href={'http://' + this.stripUrl(portfolio.linkedin_url)} aria-label="linkedIn URL"><li><button className='title btn transparent linkedin-btn' aria-label="linkedIn URL"><i className="fa fa-linkedin fa-3x" aria-hidden="true" aria-label="linkedin"></i></button></li></a></li>
                    }
                    {portfolio.twitter_url &&
                      <li><a href={'http://' + this.stripUrl(portfolio.twitter_url)} aria-label="Twitter URL"><li><button className='title btn transparent linkedin-btn' aria-label="Twitter URL"><i className="fa fa-twitter fa-3x" aria-hidden="true" aria-label="twitter"></i></button></li></a></li>
                    }
                    {portfolio.personal_url &&
                      <li><a href={'http://' + this.stripUrl(portfolio.personal_url)} aria-label="Personal URL"><li><button className='title btn transparent linkedin-btn' aria-label="Personal Website URL"><i className="fa fa-user fa-3x" aria-hidden="true" aria-label="personal site"></i></button></li></a></li>
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
