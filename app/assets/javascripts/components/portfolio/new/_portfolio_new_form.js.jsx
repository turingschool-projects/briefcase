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
    axios.post(`/alumni/${user.slug}/portfolio.json`, {portfolio: this.state.portfolio})
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
            <div className="container portfolio-btns">
              <button className="btn waves-effect waves-light" type="submit" name="action" value="Save Profile" onClick={this.handleUpdate}>Save Profile</button>
            </div>
        </form>
      </div>
    );
  }
});
