var MainSearch = React.createClass({

  sort: function(self){
    if ($('#arrow-toggle').hasClass('fa-arrow-up')) {
      this.props.prepNewPortfolios(this.props.portfolios.sort(function(a, b){
        if(a.full_name < b.full_name) return -1;
        if(a.full_name > b.full_name) return 1;
        return 0;
      }))
      $('#arrow-toggle').removeClass("fa-arrow-up");
      $('#arrow-toggle').addClass("fa-arrow-down");
    } else {
      this.props.prepNewPortfolios(this.props.portfolios.sort(function(a, b){
        if(b.full_name < a.full_name) return -1;
        if(b.full_name > a.full_name) return 1;
        return 0;
      }))
      $('#arrow-toggle').removeClass("fa-arrow-down");
      $('#arrow-toggle').addClass("fa-arrow-up");
    }
  },

  allGraduates: function(){
    this.props.prepNewPortfolios(this.props.portfolios)
  },


  handleSearch :function(event){
    var data = event.target.value.split(" ");
    var portfolios = this.props.portfolios;
    var locations = this.props.locations;
    var experiences = this.props.previous_experiences;
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
        else if (portfolios[i].previous_experience.toLowerCase().indexOf(data[j].toLowerCase()) != -1) {
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
          <div className='col s12 l6'>
            <div className="search-container">
              <form action className="Search">
                <input name="search-field" className="Search-box" aria-label="search" placeholder="Search Here..." type="search" id="Search-box" autoComplete="off" onChange={this.handleSearch}/>
                <label className="Search-label" htmlFor="Search-box"><i className="material-icons">search</i></label>
              </form>
            </div>
          </div>
          <div className='col s12 l6 search-buttons'>
            <ul>
              <li><button className='title btn transparent all-graduates-btn' onClick={this.allGraduates}>All Alumni</button></li>
              <li><button className='title btn transparent a-z-btn' onClick={this.sort}> A-Z <i id='arrow-toggle' className="fa fa-arrow-down" aria-label="sort graduates a to z" aria-hidden="true"></i></button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})
