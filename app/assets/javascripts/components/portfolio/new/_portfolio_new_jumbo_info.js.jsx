var PortfolioNewJumboInfo = React.createClass({

  getInitialState(){
    return { full_name: "" }
  },

  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({full_name: event.target.value});
    if(event.target.id == "edit-full-name") { stateToUpdate.full_name = event.target.value; fieldToUpdate = "full_name" };
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
                      <input type="text" id="edit-full-name" placeholder="Full Name" defaultValue={this.state.full_name} onChange={this.handleNew}></input>
                  </div>
                  <div className="col s4 offset-s4">
                      <input value={this.state.title} placeholder="Title" onChange={e => this.setState({title: e.target.value})}></input>
                  </div>
                  <ul className='pull-right' >
                    <li><button className='title btn transparent resume-btn'>Published</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
