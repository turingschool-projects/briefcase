var UserProjectCard = React.createClass ({
	render() {
		var all_projects = this.props.projects.map((project) => {
			// var production_url = project.production_url.split('//')
			// var github = project.github.split('//')
			return (
						<div className='projects'>
							<div className='title col s12'>
								<h1>{project.name}</h1>
							</div>
							<div className='project-screenshot'>
								<img src={project.screenshot}></img>
							</div>

							<div className='project-overview col s6'>
								<h1>Overview</h1>
								<p>{project.description}</p>
							</div>								
							<div className='focus col s6'>
								<h1>My Areas of Focus</h1>
								<p>{project.areas_of_focus}</p>
							</div>
							<div className='col s12 project-buttons'>
	              <ul>
	                <li><button className='btn transparent repository-btn'><a href={ 'http://' + github[github.length - 1]}>Repository Page <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> </button></li>
	                <li><button className='btn transparent launch-app-btn'><a href={ 'http://' + production_url[production_url.length - 1] }>Launch Application <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> </button></li>
	              </ul>
              </div>
              <div className='row'></div>
						</div>
						)
		});

		return (
			<div className='container'>
				<div className="row ">
          <div className='my-projects col s12'>
            <h1>My Projects</h1>
						{all_projects}
          </div>
        </div>
			</div>

		)
	}
})



