var ProjectForm = React.createClass({
  render: function(){
    return(
      <div className="container project-form">
      <div className="row project-row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Project Name*" id="first_name" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input placeholder="Github Url*" id="last_name" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Production Url" id="email" type="email" className="validate" />
              </div>
              <div className="input-field col s6">
                <input placeholder="Upload Screen Shot" id="email" type="email" className="validate" />
              </div>
            </div>
          </form>
        </div>
        <a className="waves-effect waves-light btn project-save" data-reactid="54"><i className="fa fa-check" aria-hidden="true"></i>Save Project </a>
      </div>

    )
  }
})
