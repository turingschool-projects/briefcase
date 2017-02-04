var Footer = React.createClass({
  render: function() {
    return (
        <footer className="page-footer">
        <div className="row">
          <div className="col s4">
            <center><h2 className='newsletter'>Sign Up for our news letter</h2></center>
            <p>Get the latests and greatest news and updates from the team here at Turing that you'll enjoy</p>
        </div>
        <div className="col s4">
          <center><h2 className='newsletter'>Social Links</h2></center>
          <center><i className="fa fa-github fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-twitter fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-facebook-official fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-instagram fa-3x social-footer" aria-hidden="true"></i>
          <i className="fa fa-google fa-3x social-footer" aria-hidden="true"></i></center>

      </div>
      <div className="col s4">
        <center><h2 className='newsletter'>Contact us</h2></center>
    </div>
      </div>
    </footer>
    );
  }
});
