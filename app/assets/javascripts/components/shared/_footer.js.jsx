var Footer = React.createClass({
  render: function() {
    return (
        <footer className="page-footer">
        <div className="row">
          <div className="col s4">
            <center><h2 className='newsletter'>Sign Up for our news letter</h2></center>
            <center><p className='address'>Get the latest and greatest news and updates from the team here at Turing that you'll enjoy!</p></center>
            <div className='input-for-news'>
          <center>
            <input className='input-newsletter' placeholder="Your Email Here">


            </input>
          </center>
            </div>
          </div>
        <div className="col s4">
          <center><h2 className='newsletter'>Social Links</h2></center>
          <div>
            <center>

          <a href="https://github.com/turingschool"><i className="fa fa-github fa-3x social-footer" aria-hidden="true"></i></a>
          <a href="https://twitter.com/turingschool"><i className="fa fa-twitter fa-3x social-footer" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/turingschool"><i className="fa fa-facebook-official fa-3x social-footer" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/turing_school/"><i className="fa fa-instagram fa-3x social-footer" aria-hidden="true"></i></a>
          <a href="https://plus.google.com/110171830647821535352"><i className="fa fa-google fa-3x social-footer" aria-hidden="true"></i></a>
          </center>
          </div>
      </div>
      <div className="col s4">
      <center><h2 className='newsletter'>Contact us</h2></center>
      <center><p className='address'>Turing School of Software & Design
          1331 17th Street, Suite LL100 -  Denver, CO 80202</p></center>
        <center><p className='phone-number'>
        ph: (303) 731-3117 fax: (303) 374-7360
        contact@turing.io
      </p></center>
      </div>
      </div>

    </footer>
    );
  }
});
