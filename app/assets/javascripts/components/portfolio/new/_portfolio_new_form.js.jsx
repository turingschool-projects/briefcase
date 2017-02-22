var update = React.addons.update;
var PortfolioNewForm = React.createClass({

  getInitialState(){
    var userPortfolio = {};
    return { portfolio: userPortfolio }
  },

  prepForInsert(updatedState, fieldToUpdate){
    this.setState({ portfolio: update(this.state.portfolio, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleInsert(){
    var user = this.props.user;
    var validationMessages = this.validationMessages;

    axios.post(`/users/${user.id}/portfolio.json`, {portfolio: this.state.portfolio})
    .then(response => {
      window.location = response.data;
    })
    .catch(error => {
      errors = validationMessages();
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

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio
    return (
      <div>

        <PortfolioNewJumboInfo user={user} prepForInsert={this.prepForInsert}/>
        <PortfolioNewBodyInfo locations={this.props.locations} user={user} prepForInsert={this.prepForInsert}/>
          <div className="container">
            <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleInsert}>Save Profile</button>
          </div>

      </div>
    );
  }
});
