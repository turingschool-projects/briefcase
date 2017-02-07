var PortfolioEditForm = React.createClass({

  handleUpdate(){

  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio
    return (
      <div>
        <form>
          <PortfolioEditJumboInfo user={user} portfolio={portfolio}/>
          <PortfolioEditBodyInfo user={user} portfolio={portfolio}/>
        </form>
      </div>
    );
  }
});
