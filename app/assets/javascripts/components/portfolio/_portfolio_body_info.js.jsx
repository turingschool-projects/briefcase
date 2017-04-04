var PortfolioBodyInfo = React.createClass({

  getInitialState(){
    if(this.props.allProps.portfolio == null) {
      var userPortfolio = { bio: "" }
      } else {
        var userPortfolio = this.props.allProps.portfolio;
      }

    return {
      bio: userPortfolio.bio
    }
  },

  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({bio: event.target.value});
    if(event.target.id == "bio") { stateToUpdate.bio = event.target.value; fieldToUpdate = "bio" };

    this.props.allProps.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    var placeHolder = 'A description of yourself, your background, languages you are good at, and whatever else you would like to include in your bio...*';

    return (
      <div>
        <div className="container">
          <div className="row about-me">
            <div className='col s4 graduate-picture'>
              <PortfolioAvatar allProps={this.props.allProps}/>
              <h3>Ideally square, like 365px x 365px</h3>
            </div>
            <div className='col s8 offset-s4'>
              <h1>About You</h1>
            </div>
            <div className="col s8 offset-s4">
              <textarea id="bio" name="bio" className="bio-edit editor" placeholder={placeHolder} defaultValue={this.state.bio} onChange={this.handleNew}></textarea>
            </div>
        </div>
        <PortfolioMidInfo allProps={this.props.allProps} />
      </div>
    </div>
    );
  }
});
