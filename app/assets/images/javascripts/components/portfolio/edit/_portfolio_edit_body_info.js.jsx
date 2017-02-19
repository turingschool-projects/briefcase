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
            {avatar && 
              <img className="" src={avatar} alt="Andrew Crist"></img>}
              <PortfolioEditAvatar portfolio={portfolio} user={user} prepForUpdate={this.props.prepForUpdate}/>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About You</h1>
            </div>
            <div className="col s8 offset-s4">
              <textarea id="bio"className="bio-edit editor" defaultValue={portfolio.bio} onChange={this.handleEdit}></textarea>
            </div>
        </div>
        <PortfolioEditMidInfo user={user} portfolio={portfolio} prepForUpdate={this.props.prepForUpdate}/>
      </div>
    </div>
    );
  }
});
