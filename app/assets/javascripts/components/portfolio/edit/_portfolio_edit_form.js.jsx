var update = React.addons.update;
var PortfolioEditForm = React.createClass({

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return { portfolio: userPortfolio }
  },

  prepForUpdate(updatedState, fieldToUpdate){
    debugger
    this.setState({ portfolio: update(this.state.portfolio, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleUpdate(){
    var user = this.props.user;

    axios.put(`/users/${user.id}/portfolio.json`, {portfolio: this.state.portfolio})
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
    var avatar = this.props.avatar
    return (
      <div>
        <form>
          <PortfolioEditJumboInfo user={user} portfolio={portfolio} prepForUpdate={this.prepForUpdate}/>
          <PortfolioEditBodyInfo avatar={avatar} user={user} portfolio={portfolio} prepForUpdate={this.prepForUpdate}/>

          <div className="container">
            <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleUpdate}>Save Profile</button>
          </div>
        </form>
      </div>
    );
  }
});
