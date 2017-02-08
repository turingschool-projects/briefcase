var DeletePortfolio = React.createClass({
  render: function() {
    return (
      <div>
        <SignedInNavbar/>
        <DeletePortfolioJumboHeading user = {this.props.user}/>
        <div className="container">
          <div className="row delete-row">
            <div className="col s12">
              <p>This action cannot be undone.</p>
            </div>
          </div>
          <div className="row delete-button-row">
            <div className="col s12">
              <p>This action cannot be undone.</p>
              <button className="profile-delete cancel" href="/dashboard">Cancel <i className="fa fa-arrow-left" aria-hidden="true"></i></button>
              <button className="profile-delete delete" href="/alumi">Delete <i className="icon-trash" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>

    );
  }
});
