var PortfolioResume = React.createClass({
  getInitialState(){
    return {
      file: '',
      imagePreviewUrl: ''
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    var stateToUpdate = {};
    var fieldToUpdate;

    stateToUpdate.resume = this.state.file; fieldToUpdate = "resume"
    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
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
    }

    reader.readAsDataURL(file)
  },

  render() {
    return (
      <div className="portfolio-image-upload outer">
        <div className='button-input inner'><input id='file-input' className="fileInput" type="file" onChange={this.handleImageChange} /></div>
        <div className='button-input inner'><button id='submit-button' className="submitButton" type="submit" onClick={this.handleSubmit}>Upload File</button></div>
      </div>
    )
  }

});
