var PortfolioEditMidInfo = React.createClass({
  componentDidMount(){
    $('select').material_select();
  },

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return {
            email: userPortfolio.email,
            resume: userPortfolio.resume,
            lookingFor: userPortfolio.looking_for,
            cohort: userPortfolio.cohort,
            github: userPortfolio.github_url,
            linkedin: userPortfolio.linkedin_url,
            background: userPortfolio.background,
            locations: userPortfolio.locations,
            bestAt: userPortfolio.best_at,
            hired: userPortfolio.hired,
            hiredBy: userPortfolio.hired_by
            }
  },

  handleEdit: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({bio: event.target.value});
    if(event.target.id == "email") { stateToUpdate.bio = event.target.value; fieldToUpdate = "email" };
    if(event.target.id == "resume") { stateToUpdate.bio = event.target.value; fieldToUpdate = "resume" };
    if(event.target.id == "looking-for") { stateToUpdate.bio = event.target.value; fieldToUpdate = "lookingFor" };
    if(event.target.id == "best-at") { stateToUpdate.bio = event.target.value; fieldToUpdate = "bestAt" };
    if(event.target.id == "github") { stateToUpdate.bio = event.target.value; fieldToUpdate = "github" };
    if(event.target.id == "linkedin") { stateToUpdate.bio = event.target.value; fieldToUpdate = "linkedin" };
    if(event.target.id == "hired-by") { stateToUpdate.bio = event.target.value; fieldToUpdate = "hiredBy" };
    if(event.target.id == "cohort") { stateToUpdate.bio = event.target.value; fieldToUpdate = "cohort" };
    if(event.target.id == "email") { stateToUpdate.bio = event.target.value; fieldToUpdate = "email" };

    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (

      <main className="row about-me-cont">

        <section className="col s12">
          <h1 id="edit-profile-information">Profile Information</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="example@example.com"></input>
            </div>
            <div className='col s6'>
              <label htmlFor="resume">Email</label><br/>
              <input id="resume" type="file"></input>
            </div>
          </div>
        </section>

        <section className="col s12">
          <div className="row mid-bio">
            <div className='col s6'>
              <label htmlFor="looking-for">Looking For</label>
              <textarea className="editor-looking-for" id="looking-for" placeholder="example@example.com"></textarea>
            </div>
            <div className='col s6'>
              <label htmlFor="best-at">Best At</label>
              <textarea className="editor-best-at" id="best-at" type="file"></textarea>
            </div>
          </div>
        </section>

        <section className="input-field col s12">
          <select multiple id="locations">
              <option value="" disabled selected>Denver Austin NYC</option>
              <option value="1">Denver</option>
              <option value="2">Austin</option>
              <option value="3">NYC</option>
          </select>
          <label htmlFor="locations">Preferred Locations</label><br/>
        </section>

        <section className="links col s12">
          <h1 id="edit-profile-information">Social</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="github">GitHub</label>
              <input id="github" placeholder="github.com/:username"></input>
            </div>
            <div className='col s6'>
              <label htmlFor="twitter">Twitter</label>
              <input id="twitter" placeholder="twitter.com/:username"></input>
            </div>
          </div>

          <div className="row">
            <div className='col s6'>
              <label htmlFor="linkedin">GitHub</label>
              <input id="linkedin" placeholder="linkedin.com/:username"></input>
            </div>
            <div className='col s6'>
              <label htmlFor="github-id">GitHub ID</label>
              <input id="github-id" placeholder=":username"></input>
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
              <input id="hired-by" placeholder="Google, Inc."></input>
            </div>
          </div>
        </section>

        <section className="school-info col s12">
          <h1 id="edit-profile-information">School Information Status</h1>
          <label htmlFor="cohort">Cohort</label>
          <select id="cohort">
              <option value="" disabled selected>1608</option>
              <option value="1">1608</option>
              <option value="2">1610</option>
              <option value="3">1611</option>
          </select>
        </section>

        <section className="published col s12">
          <h1 id="edit-profile-information">Publishing Options</h1>
          <input type="checkbox" id="published" ></input>
          <label htmlFor="published">Published</label>
        </section>

      </main>
    );
  }
});
