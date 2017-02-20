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
        <div className="search-container">
         <form action className="Search">
           <input className="Search-box" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" />
           <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>
         </form>
         <i className="fa fa-heart-o left fa-2x" aria-hidden="true" onClick={this.showHearts}></i>
         </div>
       </div>
    )
  }
})
