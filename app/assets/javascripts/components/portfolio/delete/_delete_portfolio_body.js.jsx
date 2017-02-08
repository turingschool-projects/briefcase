
var DeletePortfolioBody = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row delete-row">
            <div className="col s12">
              <p>This action cannot be undone.</p>
            </div>
          </div>
          <div className="row delete-button-row">
            <div className="col s12">
              <button className="profile-delete cancel" href="/dashboard"> <i className="fa fa-arrow-left" aria-hidden="true"> Cancel</i></button>
              <button className="profile-delete delete" href="/alumi">Delete <i className="icon-trash" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        
      </div>

    );
  }
});

