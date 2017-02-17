var PortfolioNewAvatar = React.createClass({
  getInitialState(){
    return {
      file: '',
      imagePreviewUrl: ''
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    var stateToUpdate = {};
    var fieldToUpdate;

    stateToUpdate.avatar = this.state.file; fieldToUpdate = "avatar"
    this.props.prepForInsert(stateToUpdate, fieldToUpdate);
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
    var imagePreviewUrl = this.state.imagePreviewUrl;
    var imagePreview = null;
    if (imagePreviewUrl != '') {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <div className="portfolio-image-upload outer">
        <div className='button-input inner'><input id='file-input' className="file fileInput" type="file" onChange={this.handleImageChange} /></div>
        <div className='button-input inner'><button id='submit-button' className="submitButton" type="submit" onClick={this.handleSubmit}>Upload</button></div>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }

});
