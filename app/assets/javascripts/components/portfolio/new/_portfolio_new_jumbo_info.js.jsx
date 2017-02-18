var PortfolioNewJumboInfo = React.createClass({

  getInitialState(){
    return {
      full_name: "",
      title: "",
      bio: ""
     }
  },

  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    if(event.target.id == "edit-full-name") {  this.setState({full_name: event.target.value}); stateToUpdate.full_name = event.target.value; fieldToUpdate = "full_name" };
    if(event.target.id == "edit-title") {  this.setState({title: event.target.value}); stateToUpdate.title = event.target.value; fieldToUpdate = "title" };
    this.props.prepForInsert(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    var user = this.props.user;

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
                      <input type="text" id="edit-full-name" name="name" placeholder="Full Name (required)" defaultValue={this.state.full_name} onChange={this.handleNew}></input>
                  </div>
                  <div className="col s4 offset-s4">
                      <input type="text" id="edit-title" name="title" placeholder="Title (required)" defaultValue={this.state.title} onChange={this.handleNew}></input>
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
