var ProjectForm = React.createClass({
  getInitialState(){
    return {
            name: ""

            }
  },


  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    if(event.target.id == "project-name") {this.setState({name: event.target.value}); stateToUpdate.name = event.target.value; fieldToUpdate = "name" };

    this.props.prepForInsert(stateToUpdate, fieldToUpdate);

  },

  render: function(){
    return(
      <div className="container project-form">
      <div className="row project-row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Project Name*" id="project-name" type="text" defaultValue="" className="validate" onChange={this.handleNew}></input>
              </div>
              <div className="input-field col s6">
                <input placeholder="Github Url*" id="last_name" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 production">
                <input placeholder="Production Url" id="email" type="email" className="validate" />
              </div>
              <div className="input-field col s6 ">
                 <div className="file-field input-field">
                   <div className="btn file">
                     <span>File</span>
                     <input  type="file"/>
                   </div>
                   <div className="file-path-wrapper">
                     <input placeholder="Upload Screen Shot" className="file-path validate" type="text" />
                   </div>
                 </div>
              </div>
            </div>
          </div>
          <section className="col s12">
            <div className="row mid-bio">
              <div className='col s6'>
                <label htmlFor="looking-for">Description of project</label>
                <textarea className="editor-project" id="looking-for" placeholder="example@example.com"></textarea>
              </div>
              <div className='col s6'>
                <label htmlFor="best-at">My Areas of Focus</label>
                <textarea className="editor-focus" id="best-at" type="file"></textarea>
              </div>
            </div>
          </section>
        </div>
        <a className="waves-effect waves-light btn project-save" onClick={this.props.handleInsert}><i className="fa fa-check" aria-hidden="true"></i>Save Project </a>
      </div>

    )
  }
})
