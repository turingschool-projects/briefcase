var PortfolioNewMidInfo = React.createClass({
  componentDidMount(){
    $('select').material_select();
  },

  getInitialState(){
    return {
            email: "",
            resume: "",
            looking_for: "",
            cohort: "",
            github_url: "",
            linkedin_url: "",
            background: "",
            locations: "",
            best_at: "",
            hired: "",
            hired_by: "",
            twitter_url: "",
            personal_url: "",
            hired_by: ""
          }
  },

  handleNew: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;

    if(event.target.id == "email") {this.setState({email: event.target.value}); stateToUpdate.email = event.target.value; fieldToUpdate = "email" };
    if(event.target.id == "resume") { this.setState({resume: event.target.value}); stateToUpdate.resume = event.target.value; fieldToUpdate = "resume" };
    if(event.target.id == "looking-for") { this.setState({looking_for: event.target.value}); stateToUpdate.looking_for = event.target.value; fieldToUpdate = "looking_for" };
    if(event.target.id == "best-at") { this.setState({best_at: event.target.value}); stateToUpdate.best_at = event.target.value; fieldToUpdate = "best_at" };
    if(event.target.id == "github") {this.setState({github_url: event.target.value}) ;stateToUpdate.github_url = event.target.value; fieldToUpdate = "github_url" };
    if(event.target.id == "linkedin") {this.setState({linkedin_url: event.target.value}) ;stateToUpdate.linkedin_url = event.target.value; fieldToUpdate = "linkedin_url" };
    if(event.target.id == "hired-by") {this.setState({hired_by: event.target.value}) ;stateToUpdate.hired_by = event.target.value; fieldToUpdate = "hired_by" };
    if(event.target.id == "cohort") {this.setState({cohort: event.target.value}); stateToUpdate.cohort = event.target.value; fieldToUpdate = "cohort" };
    if(event.target.id == "twitter") {this.setState({twitter_url: event.target.value}); stateToUpdate.twitter_url = event.target.value; fieldToUpdate = "twitter_url" };
    if(event.target.id == "personal-url") {this.setState({personal_url: event.target.value}); stateToUpdate.personal_url = event.target.value; fieldToUpdate = "personal_url" };
    if(event.target.id == "hired-by") {this.setState({hired_by: event.target.value}); stateToUpdate.hired_by = event.target.value; fieldToUpdate = "hired_by" };

    this.props.prepForInsert(stateToUpdate, fieldToUpdate);
  },

  componentDidMount(){
    $('select').material_select();
    $('select').on('change', this.handleNew)
    $('.modal').modal();
  },

  render: function() {
    var user = this.props.user;
    var locations = this.props.locations
    return (

      <main className="row about-me-cont">

        <section className="col s12">
          <h1 id="edit-profile-information">Profile Information</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="example@example.com (required)"  onChange={this.handleNew}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="resume">Resume</label><br/>
              <PortfolioResume prepForUpdate={this.props.prepForInsert}/>
            </div>

          </div>
        </section>

        <section className="col s12">
          <div className="row mid-bio">
            <div className='col s6'>
              <label htmlFor="looking-for">Looking For</label>
              <textarea id="looking-for" className="editor-looking-for" placeholder=""  onChange={this.handleNew}></textarea>
            </div>
            <div className='col s6'>
              <label htmlFor="best-at">Best At</label>
              <textarea id="best-at" className="editor-best-at" type="file" onChange={this.handleNew}></textarea>
            </div>
          </div>
        </section>

        <a className="waves-effect waves-light btn" href="#modal1">Locations</a>
         <div id="modal1" className="modal">
           <div className="modal-content">
            { locations.map(function(location){
              return  <div>
                <input type="checkbox" id={location.id}/><label htmlFor={location.id}>{location.city} , {location.state}</label>
                </div>
            })}
           </div>
           <div className="modal-footer">
             <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Save Cities</a>
           </div>
         </div>



        <section clas
          sName="links col s12">
          <h1 id="edit-profile-information">Social</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="github">GitHub</label>
              <input id="github" placeholder="github.com/:username (required)" onChange={this.handleNew}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="twitter">Twitter</label>
              <input id="twitter" placeholder="twitter.com/:username" onChange={this.handleNew}></input>
            </div>
          </div>

          <div className="row">
            <div className='col s6'>
              <label htmlFor="linkedin">LinkedIn</label>
              <input id="linkedin" placeholder="linkedin.com/:username (required)" onChange={this.handleNew}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="personal-url">Personal Site</label>
              <input id="personal-url" placeholder="https://www.mysite.com" onChange={this.handleNew}></input>
            </div>
          </div>
        </section>

        <section className="employment-status col s12">
          <h1 id="edit-profile-information">Employment Status</h1>
          <div className="row">
            <div className='col s6'>
              <input type="checkbox" id="hired" ></input>
              <label htmlFor="hired">Hired</label>
            </div>
            <div className='col s6'>
              <label htmlFor="hired-by">Hired By</label>
              <input id="hired-by" placeholder="Google, Inc." onChange={this.handleNew}></input>
            </div>
          </div>
        </section>

        <section className="school-info col s12">
          <h1 id="edit-profile-information">School Information Status</h1>
          <label htmlFor="cohort">Cohort</label>
          <select id="cohort">
            <option value="" disabled selected>Select Cohort</option>
            <option value="1608">1608</option>
            <option value="1608">1608</option>
            <option value="1701">1701</option>
            <option value="1703">1703</option>
            <option value="1705">1705</option>
            <option value="1707">1707</option>
            <option value="1709">1709</option>
            <option value="1711">1711</option>
          </select>
        </section>

        <section className="published col s12">
          <h1 id="edit-profile-information">Publishing Options</h1>
          <input type="checkbox" id="published" onChange={this.handleNew}></input>
          <label htmlFor="published">Published</label>
        </section>

      </main>
    );
  }
});
