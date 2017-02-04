var Account = React.createClass({
  render: function() {
    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <input>

              </input>
              <label>
                Current password
              </label>
              <input>

              </input>
              <label>
                Email Address
              </label>
              <div className="row">
                <div className='col s6'>
                  <input>

                  </input>
                  <label>
                    Password
                  </label>
                </div>
                <div className='col s6'>
                  <input>

                  </input>
                  <label>
                    Confirm Password
                  </label>

                </div>
                <div className='col s6'>


                </div>
            </div>
            <div className="col s6">
              <a className="waves-effect waves-light btn">button</a>
            </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});
