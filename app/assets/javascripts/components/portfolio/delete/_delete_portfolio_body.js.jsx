
var DeletePortfolioBody = React.createClass({

  handleDelete(){
    var user = this.props.user;

    axios.delete(`/alumni/${user.slug}/portfolio.json`)
    .then(response => {
      window.location = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  render: function() {
  var slug = this.props.user.slug
    return (
      <div>
        <div className="container delete-portfolio">
          <div className="row">
            <div className="col s12 delete-row">
              <p>This action cannot be undone.</p>
            </div>
            <div className="col s12 delete-button-row">
              <a className="waves-effect waves-light btn red delete" onClick={this.handleDelete}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete </a>
              <a className="cancel" href='/dashboard' >Cancel</a>
            </div>
          </div>
        </div>
        
      </div>

    );
  }
});

