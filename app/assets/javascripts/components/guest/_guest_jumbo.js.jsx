var GuestJumbo = React.createClass({
  render: function() {
    return (
      <div>
          <section id="show-block-95" className="block block-block block-background show-block-95 block-layout-contained      clearfix" >
            <div className="container">
              <div className='show-name-container'>
                <div className="show-name-holder">
                  <div className="col s12">


                    <div className="row">
                      <div className='col s4'>
                      </div>
                      <div className="col s4">
                          <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                      </div>
                      <div className="col s4 offset-s4">
                          <p>{this.props.user.title}</p>
                      </div>
                      <ul className='pull-right' >
                      <li><button className='title btn transparent resume-btn'>Resume</button></li>
                      <li><button className='title btn transparent linkedin-btn'><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></button></li>
                      <li><button className='title btn transparent heart'><i className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.fillHeart}></i></button></li>
                      </ul>
                      
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
              </div>
              <div className="col s8 offset-s4">
                <p>{this.props.user.bio}</p>
              </div>
              <div className=" col s8 offset-s4">
              <ul>
                <li><button className='btn transparent email-btn'>Email Directly <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></li>
                <li><button className='btn transparent github-btn'>GitHub Profile  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></li>

              </ul>
              </div>
              </div>


            <div className="row about-me-cont">

              <div className='col s5'>
                <div className='col s12'>
                  <h1>Looking For</h1>
                </div>
                <div className='col s12'>
                      <ul>
                      <li>Somthing</li>
                      <li>Somthing</li>
                      <li>Somthing</li>
                      </ul>
                </div>
              </div>
              <div className="col s4">
                <div className='col s12'>
                  <h1>Best At</h1>
                </div>
                <div className='col s12'>
                      <ul>
                      <li>Somthing</li>
                      <li>Somthing</li>
                      <li>Somthing</li>
                      </ul>
                </div>
              </div>
              <div className="col s3">
                <div className='col s12'>
                  <h1>Perfered Locations</h1>
                </div>
                <div className='col s12'>
                      <ul>
                      <li>Somthing</li>
                      <li>Somthing</li>
                      <li>Somthing</li>
                      </ul>
                </div>
              </div>
              </div>

            </div>

        </div>

            


    );
  }
});
