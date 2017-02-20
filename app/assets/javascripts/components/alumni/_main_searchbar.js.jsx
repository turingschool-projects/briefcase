var MainSearch = React.createClass({

  showHearts: function(event){
    $('.fa-heart')[0].parentElement
  },

  handleSearch :function(event){
    data = event.target.value.split(" ");
    var portfolios = this.props.portfolios;
    var filterPortfolios = [];

    for (var i = 0; i < portfolios.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if (portfolios[i].full_name.indexOf(data[j]) != -1) {
          filterPortfolios.push(portfolios[i]);
        }
      }
    }
    if(data[0].length < 1) { filterPortfolios = portfolios; }
    this.props.prepNewPortfolios(filterPortfolios);
  },

  render: function() {
    return (
        <div className="region-filters">
        <div className="search-container">
         <form action className="Search">
           <input className="Search-box" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" onChange={this.handleSearch}/>
           <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>
              {/* <button className="btn" onClick={this.showHearts}>by hearts</button> */}
         </form>
         </div>
       </div>
    )
  }
})
