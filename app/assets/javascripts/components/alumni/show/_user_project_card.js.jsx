var UserProjectCard = React.createClass ({
	stripUrl(url){
		return url.replace("https://", "").replace("http://", "");
	},

	render() {
		var avatars = this.props.avatars
		var all_projects = this.props.projects.map((project) => {
			return (
						<div className='projects'>
							<div className='title col s12'>
								<h1>{project.name}</h1>
							</div>
							<div className='project-screenshot'>
								{avatars[project.id] !== "/avatars/original/missing.png" &&
								<img src={avatars[project.id]}></img>}
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
									{project.github &&
	                	<li><button className='btn transparent repository-btn'><a target="_blank" href={ 'http://' + this.stripUrl(project.github)}>Repository Page <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> </button></li> }
									{project.production_url &&
										<li><button className='btn transparent launch-app-btn'><a target="_blank" href={ 'http://' + this.stripUrl(project.production_url) }>Launch Application <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> </button></li> }
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
