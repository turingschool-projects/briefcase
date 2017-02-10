var update = React.addons.update;
var PortfolioNewForm = React.createClass({

  getInitialState(){
    var userPortfolio = {
      full_name: "",
      title: "",
      bio: ""
    };
    return { portfolio: userPortfolio }
  },

  prepForInsert(updatedState, fieldToUpdate){
    this.setState({ portfolio: update(this.state.portfolio, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleInsert(){
    var user = this.props.user;
    axios.post(`/users/${user.id}/portfolio.json`, {portfolio: this.state.portfolio})
    .then(response => {
      window.location = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio
    return (
      <div>
        <form>
          <PortfolioNewJumboInfo user={user} prepForInsert={this.prepForInsert}/>
          <PortfolioNewBodyInfo user={user} prepForInsert={this.prepForInsert}/>
            <div className="container">
              <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleInsert}>Save Profile</button>
            </div>
        </form>
      </div>
    );
  }
});
