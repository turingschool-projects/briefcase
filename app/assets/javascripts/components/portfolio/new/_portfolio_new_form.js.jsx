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
          <PortfolioNewBodyInfo user={user} />
          <input type="submit" value="Save Profile" onClick={this.handleInsert}></input>
        </form>
      </div>
    );
  }
});
