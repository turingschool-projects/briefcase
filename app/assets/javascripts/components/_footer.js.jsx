var Footer = React.createClass({
  render: function() {
    return (
        <footer className="page-footer">
        <div className="row">
          <div className="col s4">
            <center><h2 className='newsletter'>Sign Up for our news letter</h2></center>
            <center><p className='address'>Get the latest and greatest news and updates from the team here at Turing that you'll enjoy!</p></center>
              <input className="Search-box" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" />
              <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>      </div>
        <div className="col s4">
          <center><h2 className='newsletter'>Social Links</h2></center>
          <div>
            <center>
          <i className="fa fa-github fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-twitter fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-facebook-official fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-instagram fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-google fa-3x social-footer" aria-hidden="true"></i>
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
