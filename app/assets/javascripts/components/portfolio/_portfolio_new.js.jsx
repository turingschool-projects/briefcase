var PortfolioNew = React.createClass({
  render: function(){
      var user = this.props.user;
      return(
        <div>
          <SignedInNavbar/>
          <PortfolioInfo user = {user}/>
        </div>
      )
  }
});
