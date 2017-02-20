var PortfolioEditBodyInfo = React.createClass({

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return { bio: userPortfolio.bio }
  },

  handleEdit: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({bio: event.target.value});
    if(event.target.id == "bio") { stateToUpdate.bio = event.target.value; fieldToUpdate = "bio" };
    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;
    var avatar = this.props.avatar;
    return (
      <div>
        <div className="container">
          <div className="row about-me">
            <div className='col s4 graduate-picture'>
              <PortfolioEditAvatar portfolio={portfolio} user={user} avatar={avatar} prepForUpdate={this.props.prepForUpdate}/>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About You</h1>
            </div>
            <div className="col s8 offset-s4">
              <textarea id="bio"className="bio-edit editor" placeholder='A description of yourself, your background, languages you are good at, and whatever else you would like to include in our bio... (required)' defaultValue={portfolio.bio} onChange={this.handleEdit}></textarea>
            </div>
        </div>
        <PortfolioEditMidInfo locations={this.props.locations} user={user} portfolio={portfolio} prepForUpdate={this.props.prepForUpdate} userLocations={this.props.userLocations}/>
      </div>
    </div>
    );
  }
});
