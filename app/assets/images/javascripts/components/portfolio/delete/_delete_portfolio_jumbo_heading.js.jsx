var DeletePortfolioJumboHeading = React.createClass({

  render: function() {
    var full_name = this.props.portfolio.full_name
    var title = this.props.portfolio.title

    return (
      <div>
        <div className="container">
          <div className='portfolio-name-container'>
            <div className="show-name-holder">
              <div className="col s12">
                <div className="row">
                <div className="col s12">
                  <h1>Are you sure you want to delete {full_name}?</h1>
                </div>
                <div className="col s12">
                  <p>{title}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
});
