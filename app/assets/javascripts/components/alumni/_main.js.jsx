var Main = React.createClass({

  componentDidMount(){
    $("#Search-box").keyup(function(){
      var rows = $(".card").hide();

      if (this.value.length) {
        var data = this.value.split(" ");
        $.each(data, function (index, value) {
          rows.filter(function(){
            return $(this).find('.card-content, .card-reveal').text().toLowerCase().indexOf(value.toLowerCase()) > -1;
          }).show();
        });
      } else {
        rows.show();
      }
    });
  },

  render(){
    var signedIn = this.props.signed_in;
    var portfolios = this.props.portfolios;
    var user = this.props.user;

    if(user != null) {
      return (
        <div>
          <SignedInNavbar user={user}/>
          <MainJumbo/>
          <MainSearch/>
          <UserCard portfolios = {portfolios} avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <GuestNavbar/>
          <MainJumbo/>
          <MainSearch/>
          <UserCard portfolios = {portfolios} avatars={this.props.avatars} bios={this.props.bios} locations={this.props.locations}/>
          <Footer/>
        </div>
      )
    }
  }
})
