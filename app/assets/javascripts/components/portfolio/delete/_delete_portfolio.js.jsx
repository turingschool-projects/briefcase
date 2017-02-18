var DeletePortfolio = React.createClass({

  render: function() {
    return (
      <div>
        <SignedInNavbar user={this.props.user}/>
        <PortfolioJumbo/>
        <DeletePortfolioJumboHeading portfolio = {this.props.portfolio}/>
        <DeletePortfolioBody user={this.props.user} portfolio = {this.props.portfolio}/>
      </div>

    );
  }
});
