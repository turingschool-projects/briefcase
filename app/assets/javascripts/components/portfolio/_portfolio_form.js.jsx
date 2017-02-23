var update = React.addons.update;
var PortfolioForm = React.createClass({

  getInitialState(){
    if(this.props.allProps.portfolio != null){
      var userPortfolio = this.props.allProps.portfolio;
    } else {
      var userPortfolio = {};
    }

    return { portfolio: userPortfolio }
  },

  prepForUpdate(updatedState, fieldToUpdate){
    this.setState({ portfolio: update(this.state.portfolio, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleInsert(){
    var user = this.props.allProps.user;
    var validationMessages = this.validationMessages;
    $('.loader').show();

    axios.post(`/users/${user.id}/portfolio.json`, {portfolio: this.state.portfolio})
    .then(response => {
      window.location = response.data;
    })
    .catch(error => {
      $('.loader').hide();
      errors = validationMessages();
      Materialize.toast(errors.join(""), 8000);
    });
  },

  handleUpdate(){
    var user = this.props.allProps.user;
    var validationMessages = this.validationMessages;
    $('.loader').show();

    axios.put(`/users/${user.id}/portfolio.json`, {portfolio: this.state.portfolio})
    .then(response => {
      window.location = response.data;
    })
    .catch(error => {
      $('.loader').hide();
      errors = validationMessages();
      Materialize.toast("Missing require fields", 8000);
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
    $('.loader').hide();
  },

  render: function() {

    var allProps = this.props.allProps;
    allProps.prepForUpdate = this.prepForUpdate;

    return (
      <div>
        <PortfolioJumboInfo allProps={allProps} />
        <div className="loader"></div>
        <PortfolioBodyInfo allProps={allProps} />
        <div className="container">
          {
            allProps.portfolio == null
            ? <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleInsert}>Save Profile</button>
            : <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleUpdate}>Save Profile</button>
          }
        </div>
      </div>
    )
  }
});
