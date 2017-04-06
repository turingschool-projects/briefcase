var ProjectEditForm = React.createClass({
  getInitialState(){
    return {
            name: "",
            github: "",
            production_url: "",
            description: "",
            areas_of_focus: ""
            }
  },


  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;

    if(event.target.id == "project-name") {this.setState({name: event.target.value}); stateToUpdate.name = event.target.value; fieldToUpdate = "name" };
    if(event.target.id == "github") {this.setState({github: event.target.value}); stateToUpdate.github = event.target.value; fieldToUpdate = "github" };
    if(event.target.id == "production_url") {this.setState({production_url: event.target.value}); stateToUpdate.production_url = event.target.value; fieldToUpdate = "production_url" };
    if(event.target.id == "description") {this.setState({description: event.target.value}); stateToUpdate.description = event.target.value; fieldToUpdate = "description" };
    if(event.target.id == "areas_of_focus") {this.setState({areas_of_focus: event.target.value}); stateToUpdate.areas_of_focus = event.target.value; fieldToUpdate = "areas_of_focus" };

    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
  },


  render: function(){
    var project = this.props.project
    return(
      <div className="container project-form">
      <div className="row project-row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Project Name*" id="project-name" type="text" defaultValue={project.name} className="validate" onChange={this.handleNew}></input>
              </div>
              <div className="input-field col s6">
                <input placeholder="Github Url*" id="github"  defaultValue={project.github} type="text" className="validate" onChange={this.handleNew}/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 production">
                <input placeholder="Production Url" id="production_url" type="email" defaultValue={project.production_url} className="validate" onChange={this.handleNew} />
              </div>
              <div className="input-field col s6 ">
                <ProjectEditAvatar avatar={this.props.avatar} prepForUpdate={this.props.prepForUpdate}/>
              </div>
            </div>
          </div>
          <section className="col s12">
            <div className="row mid-bio">
              <div className='col s6'>
                <label htmlFor="description">Description of project</label>
                <textarea className="" defaultValue={project.description} id="description" placeholder=""  onChange={this.handleNew} ></textarea>
              </div>
              <div className='col s6'>
                <label htmlFor="areas_of_focus">My Areas of Focus</label>
                <textarea className="" defaultValue={project.areas_of_focus} id="areas_of_focus" type="file" onChange={this.handleNew}></textarea>
              </div>
            </div>
          </section>
        </div>
        <div>
          <a className="waves-effect waves-light btn project-draft" onClick={this.props.handleDraftUpdate}><i className="fa fa-check" aria-hidden="true"></i>Save as Draft</a>
          <a className="waves-effect waves-light btn project-save" onClick={this.props.handleUpdate}><i className="fa fa-check" aria-hidden="true"></i>Publish</a>
        </div>
      </div>
    )
  }
})
