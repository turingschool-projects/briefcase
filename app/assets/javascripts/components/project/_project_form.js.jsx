var ProjectForm = React.createClass({
  render: function(){
    return(
      <div className="container">
      <div className="row project-form">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Project Name" id="first_name" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input placeholder="Github Url" id="last_name" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input disabled defaultValue="I am not editable" id="disabled" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                This is an inline input field:
                <div className="input-field inline">
                  <input id="email" type="email" className="validate" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  }
})
