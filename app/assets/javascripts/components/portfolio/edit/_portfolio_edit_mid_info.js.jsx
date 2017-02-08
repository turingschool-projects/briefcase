var PortfolioEditMidInfo = React.createClass({
  handleChange(){

  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="row about-me-cont">

          <div className="col s12">
            <div className="row">
              <div className='col s5'>
                <label for="email">Email</label>
                <input id="email" placeholder="example@example.com"></input>
              </div>
              <div className='col s5 offset-s2'>
                <label for="resume">Email</label><br/>
                <input id="resume" type="file"></input>
              </div>
            </div>
          </div>



          <div className='col s5'>
            <div className='col s12'>
              <h1>Looking For</h1>
            </div>
            <div className='col s12'>
              <ul>
                <li>Somthing</li>
                <li>Somthing</li>
                <li>Somthing</li>
              </ul>
            </div>
          </div>
          <div className="col s4">
            <div className='col s12'>
              <h1>Best At</h1>
            </div>
            <div className='col s12'>
              <ul>
                <li>Somthing</li>
                <li>Somthing</li>
                <li>Somthing</li>
              </ul>
            </div>
          </div>
          <div className="col s3">
            <div className='col s12'>
              <h1>Perfered Locations</h1>
            </div>
            <div className='col s12'>
              <ul>
                <li>Somthing</li>
                <li>Somthing</li>
                <li>Somthing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
