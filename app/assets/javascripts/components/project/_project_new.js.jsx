var update = React.addons.update;

var ProjectNew = React.createClass({
  getInitialState(){
    var portfolioProject = {
    };
    return { project: portfolioProject }
  },

  prepForInsert(updatedState, fieldToUpdate){
    this.setState({ project: update(this.state.project, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleInsert(){
    var user = this.props.user;
    $('.loader').show();

    axios.post(`/users/${user.id}/project.json`, {project: this.state.project})
    .then(response => {
      window.location = response.data;
    })
    .catch(function (error) {
      $('.loader').hide();
      Materialize.toast('Error: Missing required fields!', 4000);
    });
  },

  componentDidMount(){
    $('.loader').hide();
  },

  render: function(){
      var user = this.props.user;

      return(
        <div>
          <SignedInNavbar user={user}/>
          <ProjectJumbo/>
          <div className="loader"></div>
          <ProjectForm user={user} prepForInsert={this.prepForInsert} handleInsert={this.handleInsert}/>
          <Footer/>
        </div>
      )
  }
});
