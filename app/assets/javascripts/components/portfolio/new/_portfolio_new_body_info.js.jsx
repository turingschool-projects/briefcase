var PortfolioNewBodyInfo = React.createClass({

  getInitialState(){
    return {
      bio: ""
    }
  },

  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({bio: event.target.value});
    if(event.target.id == "bio") { stateToUpdate.bio = event.target.value; fieldToUpdate = "bio" };
    this.props.prepForInsert(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    var user = this.props.user;

    return (
      <div>
        <div className="container">
          <div className="row about-me">
            <div className='col s4 graduate-picture'>
              <img className="" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/andrew_1.jpeg?itok=H7JqZ2_W" alt="Andrew Crist"></img>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About You</h1>
            </div>
            <div className="col s8 offset-s4">
              <textarea id="bio" className="bio-edit editor" defaultValue={this.state.bio} onChange={this.handleNew}></textarea>
            </div>
        </div>
        <PortfolioNewMidInfo user={user} prepForInsert={this.props.prepForInsert}/>
      </div>
    </div>
    );
  }
});
