var update = React.addons.update;
var PortfolioEditForm = React.createClass({

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return {
      portfolio: userPortfolio,
      errors: ""
     }
  },

  prepForUpdate(updatedState, fieldToUpdate){
    this.setState({ portfolio: update(this.state.portfolio, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleUpdate(){
    var user = this.props.user;
    var validationMessages = this.validationMessages;

    axios.put(`/users/${user.id}/portfolio.json`, {portfolio: this.state.portfolio})
    .then(response => {
      window.location = response.data;
    })
    .catch(error => {
      errors = validationMessages();
      this.setState({errors: errors});
      Materialize.toast(errors.join(""), 8000);
    });
  },

  validationMessages(){
    var errors = [];
    if($('#edit-full-name').val().length == 0){
      errors.push(["Name is required. "]);
    }
    if($('#edit-title').val().length == 0){
      errors.push(["Title is required. "]);
    }
    if($('#bio').val().length == 0){
      errors.push(["Bio is required. "]);
    }
    if($('#email').val().length == 0){
      errors.push(["Email is required. "]);
    }
    if($('#github').val().length == 0){
      errors.push(["Github URL is required. "]);
    }
    if($('#linkedin').val().length == 0){
      errors.push(["Linkedin URL is required. "]);
    }
    return errors;
  },

  componentDidMount(){
    debugger
    if(this.state.errors.length > 0){
      Materialize.toast(this.state.errors, 8000);
    }
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio
    var avatar = this.props.avatar
    return (
      <div>
        <form>
          <PortfolioEditJumboInfo user={user} portfolio={portfolio} prepForUpdate={this.prepForUpdate}/>
          <PortfolioEditBodyInfo locations={this.props.locations} avatar={avatar} user={user} portfolio={portfolio} prepForUpdate={this.prepForUpdate} userLocations={this.props.userLocations}/>

          <div className="container">
            <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleUpdate}>Save Profile</button>
          </div>
        </form>
      </div>
    );
  }
});
