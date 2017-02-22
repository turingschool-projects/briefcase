var MainSearch = React.createClass({

  showHearts: function(self){
    $(self.target).toggleClass("fa-heart-o fa-heart");
    if (self.target.className === "fa center fa-2x fa-heart") {
      $('.card').hide()
      $('.card .fa-heart').parent().show()
    } else {
      $('.card').show()
    }
  },

  handleSearch :function(event){
    var data = event.target.value.split(" ");
    var portfolios = this.props.portfolios;
    var locations = this.props.locations;
    var filterPortfolios = [];

    for (var i = 0; i < portfolios.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if (portfolios[i].full_name.toLowerCase().indexOf(data[j].toLowerCase()) != -1) {
          filterPortfolios.push(portfolios[i]);
          break
        }
        else if (portfolios[i].title.toLowerCase().indexOf(data[j].toLowerCase()) != -1) {
          filterPortfolios.push(portfolios[i]);
          break
        }
        else if (portfolios[i].bio.toLowerCase().indexOf(data[j].toLowerCase()) != -1) {
          filterPortfolios.push(portfolios[i]);
          break
        }

        var currentLocations = locations[portfolios[i].id];
        for (var k = 0; k < currentLocations.length; k++){
          if(currentLocations[k].city.toLowerCase().indexOf(data[j].toLowerCase()) != -1){
            filterPortfolios.push(portfolios[i]);
            break
          }
          else if(currentLocations[k].state.toLowerCase().indexOf(data[j].toLowerCase()) != -1) {
            filterPortfolios.push(portfolios[i]);
            break
          }
        }
      }
    }
    if(data[0].length < 1) { filterPortfolios = portfolios; }
    this.props.prepNewPortfolios(filterPortfolios);
  },

  render: function() {
    return (
        <div className="region-filters">
          <div className='row'>
            <div className='col s4 offset-s2'>
              <div className="search-container">
                <form action className="Search">
                  <input className="Search-box" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" onChange={this.handleSearch}/>
                  <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>
                </form>
              </div>
            </div>
            <div className='col s3 offset-s2 search-buttons'>
              <ul>
                <li><button className='title btn transparent all-graduates-btn'>All Graduates</button></li>
                <li><button className='title btn transparent heart' onClick={this.showHearts}><i id="by-heart" className="fa fa-heart-o center fa-2x" aria-hidden="true"></i></button></li>
                <li><button className='title btn transparent a-z-btn'>A-Z <i className="fa fa-user fa-3x" aria-hidden="true"></i></button></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
})
