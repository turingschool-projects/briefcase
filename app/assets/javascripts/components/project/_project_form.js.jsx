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
              <div className="input-field col s6 production">
                <input placeholder="Production Url" id="email" type="email" className="validate" />
              </div>
              <div className="input-field col s6 ">
                <form action="#">
                 <div className="file-field input-field">
                   <div className="btn file">
                     <span>File</span>
                     <input  type="file"/>
                   </div>
                   <div className="file-path-wrapper">
                     <input placeholder="Upload Screen Shot" className="file-path validate" type="text" />
                   </div>
                 </div>
               </form>
              </div>
            </div>
          </form>
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
        <a className="waves-effect waves-light btn project-save" data-reactid="54"><i className="fa fa-check" aria-hidden="true"></i>Save Project </a>
      </div>

    )
  }
})
