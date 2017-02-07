var PortfolioInfo = React.createClass({

  handleChange(){
  },

  handleSubmit(){
    user = this.props.user;
    var newPortfolio = {
      full_name: this.refs.full_name.value,
      title: this.refs.title.value,
      cohort: this.refs.cohort.value,
      github_url: this.refs.github_url.value,
      linkedin_url: this.refs.linkedin_url.value,
      bio: this.refs.bio.value,
      background: this.refs.background.value,
      resume_file: this.refs.resume_file.value,
      locations: this.refs.locations.value,
      looking_for: this.refs.looking_for.value,
      best_at: this.refs.best_at.value,
      hired: this.refs.hired.value,
      hired_by: this.refs.hired_by.value,
      user_id: user.id
    };

    axios.post(`/users/${user.id}/portfolio`,{ portfolio: newPortfolio })
    .then(response => this.handleChange())
    .catch(function (error) {
      console.log(error);
    });
  },

  render: function() {
    var user = this.props.user;
    return (
      <div>

        <form className="portfolio-new" >
          <section id="show-block-95" className="block block-block block-background show-block-95 block-layout-contained      clearfix" >
            <div className="container">
              <div className='show-name-container'>
                <div className="show-name-holder">
                  <div className="col s12">
                    <div className="row portfolio-row">

                      <div className="col s4 offset-s4 portfolio-new">
                        <input ref="full_name" className="name"type="text" value={`${user.first_name} ${user.last_name}`} onChange={this.handleChange}/>
                      </div>
                      <div className="col s4 offset-s4">
                        <input ref="title" className="title" type="text" placeholder="*Your Expertise e.g. Software Developer*"/>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="row about-me">
              <div className='col s4 graduate-picture'>
                <img className="" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/andrew_1.jpeg?itok=H7JqZ2_W" alt="Andrew Crist"></img>
              </div>

              <div className='col s8 offset-s4'>
                <h1>About Me</h1>
                <textarea ref="bio" placeholder="Enter your description here.."/>
              </div>
            </div>
          </div>

          <input type="text" ref="cohort"/>
          <input type="text" ref="github_url"/>
          <input type="text" ref="linkedin_url"/>
          <input type="text" ref="background"/>
          <input type="text" ref="resume_file"/>
          <input type="text" ref="locations"/>
          <input type="text" ref="looking_for"/>
          <input type="text" ref="best_at"/>
          <input type="text" ref="hired"/>
          <input type="text" ref="hired_by"/>

          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
        </div>

    );
  }
});
