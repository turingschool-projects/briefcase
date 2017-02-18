var AlumniJumboInfo = React.createClass({

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
                      <h1>{portfolio.full_name}</h1>
                  </div>
                  <div className="col s4 offset-s4">
                      <p>{portfolio.title}</p>
                  </div>
                  <ul className='pull-right' >
                    <a href={this.props.resume} target="_blank"><li><button className='title btn transparent resume-btn'>Resume</button></li></a>
                    <li><button className='title btn transparent linkedin-btn'><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></button></li>
                    <li><button className='title btn transparent heart'><i className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.fillHeart}></i></button></li>
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
