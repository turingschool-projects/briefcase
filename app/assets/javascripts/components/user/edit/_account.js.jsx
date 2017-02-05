var Account = React.createClass({
  render: function() {
    return (
      <div>
        <SignedInNavbar/>
        <DashboardJumbo/>
        <div className="container">
          <div className="row account-row">
            <div className="col s6"><input></input><lable>Current Password</lable></div>
              <div className="col s6"><input></input><lable>Name</lable></div>
          </div>
          <div className="row">
            <div className="col s6"><input></input><lable>Email Address</lable></div>
            <div className="col s6">


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
