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

  handleDraftInsert(){
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

  handleInsert(){
    var user = this.props.user;
    $('.loader').show();
    const newProject = update(this.state.project, {
      'published': { $set: 'true'}
    })

    axios.post(`/users/${user.id}/project.json`, {project: newProject})
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
          <ProjectForm user={user} prepForInsert={this.prepForInsert} handleDraftInsert={this.handleDraftInsert} handleInsert={this.handleInsert}/>
          <Footer/>
        </div>
      )
  }
});
