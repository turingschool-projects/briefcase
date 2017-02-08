var DeletePortfolioJumboHeading = React.createClass({

  handleDelete(){
    var user = this.props.user;

    axios.put(`/alumni/${user.slug}/portfolio.json`, {portfolio: this.state.portfolio})
    .then(response => {
      window.location = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row heading">
            <div className="col s12">
              <h1>Are you sure you want to delete {this.props.user.portfolio.full_name}?</h1>
            </div>
            <div className="col s12">
              <p>{this.props.user.portfolio.title}</p>
            </div>
          </div>
        </div>
      </div>            
    );
  }
});
