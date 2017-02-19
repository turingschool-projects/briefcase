var Account = React.createClass({
  render: function() {
    var user = this.props.user;
    return (
      <div>
        <SignedInNavbar user={user}/>
        <DashboardJumbo/>
        <div className="container">
          <div className="row account-row">
            <div className="col s6">
              <label htmlFor="password">Current Password</label>
              <input id="password"></input>
            </div>
            <div className="col s3">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" defaultValue={user.first_name}></input>
            </div>
            <div className="col s3">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" defaultValue={user.last_name}></input>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label htmlFor="email">Email Address</label>
              <input id="email" defaultValue={user.email}></input>
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              <label htmlFor="new-password">New Password</label>
              <input id="new-password"></input>
            </div>
            <div className="col s3">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input id="confirm-password"></input>
            </div>
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
