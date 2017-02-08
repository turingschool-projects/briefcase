var PortfolioEditMidInfo = React.createClass({
  componentDidMount(){
    $('select').material_select();
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="row about-me-cont">
          <div className="col s12">
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
          </div>

          <div className="col s12">
            <div className="row mid-bio">
              <div className='col s6'>
                <label htmlFor="looking-for">Looking For</label>
                <textarea id="looking-for" placeholder="example@example.com"></textarea>
              </div>
              <div className='col s6'>
                <label htmlFor="best-at">Best At</label>
                <textarea id="best-at" type="file"></textarea>
              </div>
            </div>
          </div>

          <div className="input-field col s12">
            <label htmlFor="locations">Preferred Locations</label><br/>
            <select multiple id="locations">
                <option value="" disabled selected>Denver Austin NYC</option>
                <option value="1">Denver</option>
                <option value="2">Austin</option>
                <option value="3">NYC</option>
            </select>
        </div>

        <div className="links">
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
          </div>

          <div className="employment-status">
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
          </div>

          <div className="school-info">
            <h1 id="edit-profile-information">School Information Status</h1>
            <label htmlFor="cohort">Cohort</label>
            <select id="cohort">
                <option value="" disabled selected>1608</option>
                <option value="1">1608</option>
                <option value="2">1610</option>
                <option value="3">1611</option>
            </select>
          </div>

          <div className="published">
            <h1 id="edit-profile-information">Publishing Options</h1>
            <input type="checkbox" id="published" ></input>
            <label htmlFor="published">Published</label>
          </div>

        </div>
      </div>
    );
  }
});
