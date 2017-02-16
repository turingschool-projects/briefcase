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
          <div>
          <a className="waves-effect waves-light btn project-save" onClick={this.handleUpdate}><i className="fa fa-check" aria-hidden="true"></i>Save Project </a>
          </div>
          <Footer/>
        </div>
      )
  }
});
