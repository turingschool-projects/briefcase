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
        <div id="flash_messages" className='flash'></div>
        <div className="container">
          <div className="row about-me">
            <div className='col s4 graduate-picture'>
              <img className="" src="http://intelligentsystemsmonitoring.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="Andrew Crist"></img>
              <PortfolioNewAvatar user={user} prepForInsert={this.props.prepForInsert}/>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About You</h1>
            </div>
            <div className="col s8 offset-s4">
              <textarea id="bio" className="bio-edit editor" placeholder='A description of yourself, your background, languages you are good at, and whatever else you would like to include in our bio... (required)' defaultValue={this.state.bio} onChange={this.handleNew}></textarea>
            </div>
        </div>
        <PortfolioNewMidInfo user={user} prepForInsert={this.props.prepForInsert}/>
      </div>
    </div>
    );
  }
});
