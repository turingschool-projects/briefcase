var AlumniMidInfo = React.createClass({

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="row about-me-cont">
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
