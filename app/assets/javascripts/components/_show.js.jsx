var Show = React.createClass({

  render(){
    var user = this.props.user; // props brought from controller

    return (

      <div>
        <GuestNavbar/>
        <GuestJumbo user = {user}/>
  
      </div>
    )
  }
});
