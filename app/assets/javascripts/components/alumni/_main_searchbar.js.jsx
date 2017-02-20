var MainSearch = React.createClass({

  showHearts: function(event){
    $('.fa-heart')[0].parentElement
  },

  render: function() {
    return (
        <div className="region-filters">
        <div className="search-container">
         <form action className="Search">
           <input className="Search-box" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" />
           <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>
              {/* <button className="btn" onClick={this.showHearts}>by hearts</button> */}
         </form>
         </div>
       </div>
    )
  }
})
