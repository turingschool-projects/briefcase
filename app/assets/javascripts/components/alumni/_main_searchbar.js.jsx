var MainSearch = React.createClass({

  showHearts: function(self){
    $(self.target).toggleClass("fa-heart-o fa-heart");
    if (self.target.className === "fa left fa-2x fa-heart") {
      $('.card').hide()
      $('.card .fa-heart').parent().show()
    } else {
      $('.card').show()
    }
  },

  render: function() {
    return (
        <div className="region-filters">
          <div className='row'>
            <div className='col s4 offset-s2'>
              <div className="search-container">
                <form action className="Search">
                  <input className="Search-box" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" />
                  <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>
                </form>
              </div>
            </div>
            <div className='col s3 offset-s2 search-buttons'>
              <ul>
                <li><button className='title btn transparent all-graduates-btn'><i className="fa fa-user fa-3x" aria-hidden="true"></i></button></li>
                <li><button className='title btn transparent heart'><i id="by-heart" className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.showHearts}></i></button></li>
                <li><button className='title btn transparent a-z-btn'><i className="fa fa-user fa-3x" aria-hidden="true"></i></button></li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
})
