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
    var user = this.props.user;

    axios.put(`/alumni/${user.slug}/portfolio.json`, {portfolio: this.state.portfolio})
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

          <div className="container portfolio-btns">
            <button className="btn waves-effect waves-light" type="submit" name="action" value="Save Profile" onClick={this.handleUpdate}>Save Profile</button>
            <button className="btn waves-effect waves-light red" type="submit" name="action" value="Save Profile" >Delete</button>
          </div>

        </form>
      </div>
    );
  }
});
