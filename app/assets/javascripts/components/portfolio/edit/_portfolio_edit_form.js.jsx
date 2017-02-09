var update = React.addons.update;
var PortfolioEditForm = React.createClass({

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return { portfolio: userPortfolio }
  },

  prepForUpdate(updatedState, fieldToUpdate){
    this.setState({ portfolio: update(this.state.portfolio, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleUpdate(){
    debugger;
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
    return (
      <div>
        <form>
          <PortfolioEditJumboInfo user={user} portfolio={portfolio} prepForUpdate={this.prepForUpdate}/>
          <PortfolioEditBodyInfo user={user} portfolio={portfolio} prepForUpdate={this.prepForUpdate}/>

          <div className="container">
            <button className="btn waves-effect waves-light portfolio-btns" type="submit" name="action" value="Save Profile" onClick={this.handleUpdate}>Save Profile</button>
            <button className="btn waves-effect waves-light red portfolio-btns" type="submit" name="action" value="Save Profile" >Delete</button>
          </div>

        </form>
      </div>
    );
  }
});
