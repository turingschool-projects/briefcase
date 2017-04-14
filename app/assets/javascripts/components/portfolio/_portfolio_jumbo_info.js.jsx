var PortfolioJumboInfo = React.createClass({

  getInitialState(){
    if(this.props.allProps.portfolio == null) {
      var userPortfolio = { full_name: "", title: "" }
      } else {
        var userPortfolio = this.props.allProps.portfolio;
      }

    return {
      full_name: userPortfolio.full_name,
      title: userPortfolio.title
     }
  },

  handleUpdate: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    if(event.target.id == "edit-full-name") {  this.setState({full_name: event.target.value}); stateToUpdate.full_name = event.target.value; fieldToUpdate = "full_name" };
    if(event.target.id == "edit-title") {  this.setState({title: event.target.value}); stateToUpdate.title = event.target.value; fieldToUpdate = "title" };

    this.props.allProps.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className='portfolio-name-container'>
            <div className="show-name-holder">
              <div className="col s12">
                <div className="row">
                  <div className='col s4'>
                  </div>
                  <div className="col s4">
                      <input type="text" id="edit-full-name" name="name" placeholder="Full Name*" aria-label="Full Name" defaultValue={this.state.full_name} onChange={this.handleUpdate}></input>
                  </div>
                  <div className="col s4 offset-s4">
                      <input type="text" id="edit-title" name="title" placeholder="Title*" aria-label="Title" defaultValue={this.state.title} onChange={this.handleUpdate}></input>
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
