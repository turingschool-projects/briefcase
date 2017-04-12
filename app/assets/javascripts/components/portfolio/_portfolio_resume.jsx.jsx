var PortfolioResume = React.createClass({
  getInitialState(){
    return {
      file: '',
      imagePreviewUrl: ''
    }
  },

  handleSubmit() {
    var stateToUpdate = {};
    var fieldToUpdate;

    stateToUpdate.resume = this.state.file; fieldToUpdate = "resume"
    this.props.allProps.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        imagePreviewUrl: reader.result
      });
      this.handleSubmit();
    }

    reader.readAsDataURL(file)
  },

  render() {
    return (
      <div className="portfolio-image-upload outer">
        <div className='button-input inner'><input id='file-input-resume' className="fileInput" type="file" aria-label="File Input" onChange={this.handleImageChange} /></div>
      </div>
    )
  }

});
