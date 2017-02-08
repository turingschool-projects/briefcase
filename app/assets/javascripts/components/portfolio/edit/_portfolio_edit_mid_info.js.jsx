var PortfolioEditMidInfo = React.createClass({
  handleChange(){

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
              <div className='col s5'>
                <label for="email">Email</label>
                <input id="email" placeholder="example@example.com"></input>
              </div>
              <div className='col s5 offset-s2'>
                <label for="resume">Email</label><br/>
                <input id="resume" type="file"></input>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="row mid-bio">
              <div className='col s6'>
                <label for="looking-for">Looking For</label>
                <textarea id="looking-for" placeholder="example@example.com"></textarea>
              </div>
              <div className='col s6'>
                <label for="best-at">Best At</label>
                <textarea id="best-at" type="file"></textarea>
              </div>
            </div>
          </div>

          <div className="col s12">
            <h2>Preferred Locations</h2>
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>



        </div>
      </div>
    );
  }
});
