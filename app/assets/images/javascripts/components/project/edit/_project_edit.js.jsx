var update = React.addons.update;
var ProjectEdit = React.createClass({

  getInitialState(){
    var project = this.props.project;
    return { project: project }
  },

  prepForUpdate(updatedState, fieldToUpdate){
    this.setState({ project: update(this.state.project, {
      [fieldToUpdate]: {$set: updatedState[fieldToUpdate]}})
    });
  },

  handleUpdate(){
    var user = this.props.user;
    var project = this.props.project
    axios.put(`/users/${user.id}/project`, {project: this.state.project})
    .then(response => {
      window.location = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  render: function(){
    var user = this.props.user;
    var project = this.props.project

      return(
        <div>
          <SignedInNavbar/>
          <ProjectJumbo/>
          <ProjectEditForm project={project}  handleUpdate={this.handleUpdate} prepForUpdate={this.prepForUpdate}/>
          <Footer/>
        </div>
      )
  }
});
