var Account = React.createClass({
  render: function() {
    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>
        <div className="container">
          <div className="row">
            <div className="col s6"><input></input><lable>Current Password</lable></div>
              <div className="col s6"><input></input><lable>Name</lable></div>
          </div>
          <div className="row">
            <div className="col s6"><input></input><lable>Email Address</lable></div>
            <div className="col s6">
              <div class="card-panel teal">
                <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s3"><input></input><lable>Passord</lable></div>
            <div className="col s3"><input></input><lable>Confirm Password</lable></div>
          </div>
          <div className="row">
            <a className="waves-effect waves-light btn account-btn">Save</a>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});
