var PortfolioEditMidInfo = React.createClass({

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return {
            email: userPortfolio.email,
            resume: userPortfolio.resume,
            looking_for: userPortfolio.looking_for,
            cohort: userPortfolio.cohort,
            github_url: userPortfolio.github_url,
            linkedin_url: userPortfolio.linkedin_url,
            background: userPortfolio.background,
            locations: userPortfolio.locations,
            best_at: userPortfolio.best_at,
            hired: userPortfolio.hired,
            hired_by: userPortfolio.hired_by,
            twitter_url: userPortfolio.twitter_url,
            personal_url: userPortfolio.personal_url

            }
  },

  handleEdit: function(event){
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
    if(event.target.id == "personal-site") {this.setState({personal_url: event.target.value}); stateToUpdate.personal_url = event.target.value; fieldToUpdate = "personal_url" };

    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  componentDidMount(){
    $('select').material_select();
    $('select').on('change', this.handleEdit)
    $('.modal').modal();
    this.checkUserLocations();
  },

  checkUserLocations(){
    var locations = $('.anthony')
    var userLocations = this.props.userLocations;

    for (var i = 0; i < locations.length; i++) {
      var city = locations[i].parentElement.children[1].innerText.split(", ")[0]
      var state = locations[i].parentElement.children[1].innerText.split(", ")[1]

      for (var j = 0; j < userLocations.length; j++) {
        if(city == userLocations[j].city && state == userLocations[j].state){
          locations[i].checked = true;
        }
      }
    }
  },

  cityChecked: function() {
    var boxes = $('.anthony')
    var locationsArray = []
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked === true) {
        var a = boxes[i].parentElement.children[1].innerText
        locationsArray.push(a)
      }
    }
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({locations: locationsArray});
    stateToUpdate.locations = locationsArray; fieldToUpdate = "locations"
    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  render: function() {

    var locations = this.props.locations
    var user = this.props.user;
    var portfolio = this.props.portfolio;
    var userLocations = this.props.userLocations;

    return (

      <main className="row about-me-cont">

        <section className="col s12">
          <h1 id="edit-profile-information">Profile Information</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" placeholder="example@example.com (required)" defaultValue={portfolio.email} onChange={this.handleEdit}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="resume">Resume</label><br/>
              <PortfolioResume prepForUpdate={this.props.prepForUpdate}/>
            </div>
          </div>
        </section>

        <section className="col s12">
          <div className="row mid-bio">
            <div className='col s6'>
              <label htmlFor="looking-for">Looking For</label>
              <textarea name="looking-for" className="editor-looking-for" id="looking-for" placeholder="example@example.com" defaultValue={portfolio.looking_for} onChange={this.handleEdit}></textarea>
            </div>
            <div className='col s6'>
              <label htmlFor="best-at">Best At</label>
              <textarea name="best-at" className="editor-best-at" id="best-at" type="file" defaultValue={portfolio.best_at} onChange={this.handleEdit}></textarea>
            </div>
          </div>
        </section>

        <a className="waves-effect waves-light btn" href="#modal1">Locations</a>
         <div id="modal1" className="modal">
           <div className="modal-content">
             <div className="row">
             <input id="search" type="search" placeholder="search for a city"></input>

            { locations.map(function(location){
              return  <div className='col s4'>
                <input className="anthony" type="checkbox" id={location.city + location.state}/><label htmlFor={location.city + location.state}>{location.city}, {location.state}</label>
                </div>
            })}
            </div>
           </div>
           <div className="modal-footer">
             <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.cityChecked}>Save Cities</a>
           </div>
         </div>

        <section className="links col s12">
          <h1 id="edit-profile-information">Social</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="github">GitHub</label>
              <input id="github" name="github" placeholder="github.com/:username (required)" defaultValue={portfolio.github_url} onChange={this.handleEdit}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="twitter">Twitter</label>
              <input id="twitter" name="twitter" defaultValue={portfolio.twitter_url} onChange={this.handleEdit} placeholder="twitter.com/:username"></input>
            </div>
          </div>

          <div className="row">
            <div className='col s6'>
              <label htmlFor="linkedin">LinkedIn</label>
              <input id="linkedin" name="linkedin" placeholder="linkedin.com/:username (required)" defaultValue={portfolio.linkedin_url} onChange={this.handleEdit}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="personal-site">Personal Site</label>
              <input id="personal-site" defaultValue={portfolio.personal_url} onChange={this.handleEdit} placeholder="mypersonalsite.com"></input>
            </div>
          </div>
        </section>

        <section className="employment-status col s12">
          <h1 id="edit-profile-information">Employment Status</h1>
          <div className="row">
            <div className='col s6'>
              <input type="checkbox" id="hired" defaultValue={portfolio.hired} onChange={this.handleEdit}></input>
              <label htmlFor="hired">Hired</label>
            </div>
            <div className='col s6'>
              <label htmlFor="hired-by">Hired By</label>
              <input id="hired-by" placeholder="Google, Inc." defaultValue={portfolio.hired_by} onChange={this.handleEdit}></input>
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
          <input type="checkbox" id="published" ></input>
          <label htmlFor="published">Published</label>
        </section>

      </main>
    );
  }
});
