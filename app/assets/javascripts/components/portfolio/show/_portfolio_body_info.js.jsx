var PortfolioBodyInfo = React.createClass({

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="container">
          <div className="row about-me">
            <div className='col s4 graduate-picture'>
              <img className="" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/andrew_1.jpeg?itok=H7JqZ2_W" alt="Andrew Crist"></img>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About Me</h1>
            </div>
            <div className="col s8 offset-s4">
              <p>{portfolio.bio}</p>
            </div>
            <div className=" col s8 offset-s4">
            <ul>
              <li><button className='btn transparent email-btn'>Email Directly <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></li>
              <li><button className='btn transparent github-btn'>GitHub Profile  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></li>
            </ul>
          </div>
        </div>
        <PortfolioMidInfo user={user} portfolio={portfolio}/>
      </div>
    </div>
    );
  }
});
