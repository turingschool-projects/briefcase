var ProjectNew = React.createClass({
  render: function(){
      var user = this.props.user;

      return(
        <div>
          <SignedInNavbar/>
          <ProjectJumbo/>
          <ProjectForm/>
          <Footer/>
        </div>
      )
  }
});
