var PortfolioMidInfo = React.createClass({

  getInitialState(){
    if(this.props.allProps.portfolio == null) {
      var userPortfolio = {
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
                            hired_by: "" }
      } else {
        var userPortfolio = this.props.allProps.portfolio;
      }

    return {
      portfolio: {
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
    }
  },

  handleUpdate: function(event){
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

    this.props.allProps.prepForUpdate(stateToUpdate, fieldToUpdate);
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

    this.props.allProps.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  componentDidMount(){
    $('select').material_select();
    $('select').on('change', this.handleUpdate)
    $('.modal').modal();
    if(this.props.allProps.portfolio != null) { this.checkUserLocations(); }
    
    $("#search").keyup(function(){
      var input, filter, table, tr, td, i;
      input = document.getElementById('search-city');
      filter = this.value.toUpperCase();
      table = $('.modal-content');
      tr = $(".search-city label");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].innerText;
        if (td) {
          if (td.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    });
  },

  checkUserLocations(){
    var locations = $('.anthony')
    var userLocations = this.props.allProps.userLocations;

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

  render: function() {
    var allProps = this.props.allProps;
    var userPortfolio = this.state.portfolio;

    return (
      <main className="row about-me-cont">

        <section className="col s12">
          <h1 id="edit-profile-information">Profile Information</h1>
          <div className="row">
            <div className='col s6'>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" placeholder="example@example.com*" defaultValue={userPortfolio.email} onChange={this.handleUpdate}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="resume">Resume</label><br/>
              <PortfolioResume allProps={this.props.allProps}/>
            </div>

          </div>
        </section>

        <section className="col s12">
          <div className="row mid-bio">
            <div className='col s6'>
              <label htmlFor="looking-for">Looking For</label>
              <textarea id="looking-for" className="editor-looking-for" placeholder="" defaultValue={userPortfolio.looking_for} onChange={this.handleUpdate}></textarea>
            </div>
            <div className='col s6'>
              <label htmlFor="best-at">Best At</label>
              <textarea id="best-at" className="editor-best-at" type="file" defaultValue={userPortfolio.best_at} onChange={this.handleUpdate}></textarea>
            </div>
          </div>
        </section>

        <a className="waves-effect waves-light btn" href="#modal1">Locations</a>
         <div id="modal1" className="modal">
           <div className="modal-content">
             <div className="row search-city">
             <input id="search" type="search" placeholder="search for a city"></input>

            { allProps.locations.map(function(location){
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
              <input id="github" name="github" placeholder="github.com/:username*" defaultValue={userPortfolio.github_url} onChange={this.handleUpdate}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="twitter">Twitter</label>
              <input id="twitter" placeholder="twitter.com/:username" defaultValue={userPortfolio.twitter_url}  onChange={this.handleUpdate}></input>
            </div>
          </div>

          <div className="row">
            <div className='col s6'>
              <label htmlFor="linkedin">LinkedIn</label>
              <input id="linkedin" name="linkedin" placeholder="linkedin.com/:username*" defaultValue={userPortfolio.linkedin_url} onChange={this.handleUpdate}></input>
            </div>
            <div className='col s6'>
              <label htmlFor="personal-url">Personal Site</label>
              <input id="personal-url" placeholder="mypersonalsite.com" defaultValue={userPortfolio.personal_url} onChange={this.handleUpdate}></input>
            </div>
          </div>
        </section>

        <section className="employment-status col s12">
          <h1 id="edit-profile-information">Employment Status</h1>
          <div className="row">
            <div className='col s6'>
              <input type="checkbox" id="hired" defaultValue={userPortfolio.hired} ></input>
              <label htmlFor="hired">Hired</label>
            </div>
            <div className='col s6'>
              <label htmlFor="hired-by">Hired By</label>
              <input id="hired-by" placeholder="Google, Inc." defaultValue={userPortfolio.hired_by} onChange={this.handleUpdate}></input>
            </div>
          </div>
        </section>

        <section className="school-info col s12">
          <h1 id="edit-profile-information">School Information Status</h1>
          <label htmlFor="cohort">Cohort</label>
          <select id="cohort">
            <option value={userPortfolio.cohort}>{userPortfolio.cohort}</option>
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
          <input type="checkbox" id="published" onChange={this.handleUpdate}></input>
          <label htmlFor="published">Published</label>
        </section>

      </main>
    );
  }
});
